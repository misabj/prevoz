export type VideoCategory = "tips" | "documentation" | "fleet" | "services";

export interface Video {
  id: string;
  youtubeId: string;
  category: VideoCategory;
}

export const videos: Video[] = [
  {
    id: "video-1",
    youtubeId: "dQw4w9WgXcQ",
    category: "tips",
  },
  {
    id: "video-2",
    youtubeId: "dQw4w9WgXcQ",
    category: "documentation",
  },
  {
    id: "video-3",
    youtubeId: "dQw4w9WgXcQ",
    category: "services",
  },
  {
    id: "video-4",
    youtubeId: "dQw4w9WgXcQ",
    category: "fleet",
  },
  {
    id: "video-5",
    youtubeId: "dQw4w9WgXcQ",
    category: "tips",
  },
  {
    id: "video-6",
    youtubeId: "dQw4w9WgXcQ",
    category: "documentation",
  },
];
