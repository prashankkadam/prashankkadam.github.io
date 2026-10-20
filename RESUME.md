# Resume (`/resume.pdf`)

The PDF resume is generated from the same data files as the website on every build. Nobody edits the PDF
or a Word/Google Doc copy any more.

- Content: `src/data/*.ts` (same files as the site; see README).
- Layout: `src/pages/resume.astro` (HTML + CSS + a small layout script).
- PDF: `scripts/build-resume-pdf.mjs`, run by `npm run build` after `astro build`, prints the page with headless
  Chrome to `dist/resume.pdf`. GitHub Actions does the same on every push, so the live PDF always matches the data.

## How to update the resume

1. Edit the relevant file in `src/data/` (the website changes too).
2. Run `npm run build` and read the line `build-resume-pdf: layout {...}`:
   - `pages`: number of pages.
   - `pageFill`: how full each page is, in percent. Every page except the last should be 85% or more;
     the build prints a WARNING when one is not.
   - `fontPt`, `lineHeight`: what the layout script chose (see below).
3. Open `dist/resume.pdf` and look at it before pushing.

## Layout rules (keep these when changing the page)

1. **Nothing splits across pages.** Each job (company, roles, bullets and its Relevant Papers), each school,
   each project and each short section (skills, talks, reviewing, achievements) is one block (`.blk`), and a block
   is always printed whole.
2. **A section heading travels with its first entry.** The heading (`<h2>`) is inside the first block of its
   section, never a block of its own.
3. **No large blank space at the bottom of a page.** The layout script places blocks on pages, then spreads each
   page's leftover space evenly between that page's blocks (at most 14pt extra per gap). The last page keeps
   natural spacing.
4. **Text size adjusts itself within limits.** The script tries font sizes 9.75 to 10.75pt and line heights
   1.22 to 1.30, and keeps the setting with the fewest pages, then the fullest pages, then the largest text.
   It never goes outside those limits.
5. **Spacing between blocks is padding, not margin** (margins collapse and make the measured heights wrong).
6. **Screen and print use the same width** (`.sheet` is 180mm, the A4 width minus the 15mm side margins), so what
   the script measures is what Chrome prints. If you change `@page` margins, change `width` on `.sheet` and the
   `data-margin-y-mm` attribute to match.
7. **Fonts:** Carlito (headings, metric twin of Calibri) and Caladea (body, twin of Cambria) from Google Fonts,
   embedded in the PDF.

## When the build warns that a page is under-filled

This happens when one block is too big to fit in the space left on a page, for example a job with many bullets
or papers. In order of preference:

1. Shorten the content that pushed it over (a bullet, a paper description).
2. Move a paper to a different employer with `resumeOrg` in `src/data/research.ts`, or drop it from the resume by
   removing `resumeOrg`.
3. Hide an old entry from the resume only: `hideOnResume: true` in `src/data/experience.ts`.
4. Only then change the limits in the layout script (`sizes`, `lineHeights`, `MAX_EXTRA_GAP`) or `MIN_FILL` in the
   build script.

Do not add page-break CSS or `<br>`s by hand; the layout script owns page breaks.

## Resume-only fields in the data files

| Field | File | Effect |
| --- | --- | --- |
| `location` | `experience.ts`, `education.ts` | Shown on the resume next to dates / after the school |
| `hideOnResume` | `experience.ts` | Entry stays on the website but not on the resume |
| `resumeOrg` | `research.ts` | Lists the paper under that employer's "Relevant Papers" |
| `resumeContact` | `profile.ts` | Email and phone in the resume header |

Consecutive roles at the same employer (same `org`) are grouped under one heading with one bullet list. Each job
`description` is split into bullets at sentence ends, so write descriptions as full sentences.
