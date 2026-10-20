// Prints the built resume page (dist/resume/index.html) to dist/resume.pdf with headless Chrome.
// Runs after `astro build` (see the "build" script in package.json). Set CHROME_PATH to override the browser.
// Also reads the layout report the page writes (font size, page fill) and warns when a page is
// under-filled, so a content change that hurts the layout is visible in the build log. See RESUME.md.
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const page = resolve("dist/resume/index.html");
const out = resolve("dist/resume.pdf");
const MIN_FILL = 85; // percent; pages other than the last should be at least this full

const candidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error("build-resume-pdf: no Chrome found; set CHROME_PATH");
  process.exit(1);
}
if (!existsSync(page)) {
  console.error(`build-resume-pdf: ${page} not found; run astro build first`);
  process.exit(1);
}

const common = [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  // Wait for the web fonts and the layout script before reading or printing.
  "--virtual-time-budget=20000",
];
const url = pathToFileURL(page).href;

const dom = execFileSync(chrome, [...common, "--dump-dom", url], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
const m = dom.match(/data-layout="([^"]*)"/);
if (!m) {
  console.error("build-resume-pdf: layout script did not run (no data-layout on .sheet)");
  process.exit(1);
}
const layout = JSON.parse(m[1].replace(/&quot;/g, '"'));
console.log(`build-resume-pdf: layout ${JSON.stringify(layout)}`);
layout.pageFill.slice(0, -1).forEach((f, i) => {
  if (f < MIN_FILL) console.warn(`build-resume-pdf: WARNING page ${i + 1} is only ${f}% full; see RESUME.md`);
});

execFileSync(chrome, [...common, "--no-pdf-header-footer", `--print-to-pdf=${out}`, url], { stdio: "ignore" });
if (!existsSync(out) || statSync(out).size < 10000) {
  console.error("build-resume-pdf: resume.pdf missing or empty");
  process.exit(1);
}
// Page count check needs pdfinfo (poppler); skipped where it is not installed.
let pdfPages;
try {
  pdfPages = (execFileSync("pdfinfo", [out], { encoding: "utf8" }).match(/Pages:\s+(\d+)/) || [])[1];
} catch {}
if (pdfPages && Number(pdfPages) !== layout.pages) {
  console.warn(`build-resume-pdf: WARNING planned ${layout.pages} pages but the PDF has ${pdfPages}; a block overflowed`);
}
console.log(`build-resume-pdf: wrote ${out} (${statSync(out).size} bytes)`);
