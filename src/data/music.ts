export interface Recording {
  title: string;
  // Optional context shown under the title (raga, composer, occasion, etc.)
  detail?: string;
  // "audio" -> self-hosted file in public/audio/; "youtube" -> embedded video
  type: "audio" | "youtube";
  // For type "audio": path under /audio/. For type "youtube": the video id.
  src: string;
}

export const recordings: Recording[] = [
  {
    title: "Hamsadhwani",
    detail: "Carnatic raga · flute",
    type: "audio",
    src: "/audio/hamsadhwani.m4a",
  },
  {
    title: "Dhun",
    detail: "Hindustani light classical · flute",
    type: "audio",
    src: "/audio/dhun.m4a",
  },
];
