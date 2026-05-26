export interface VideoItem {
  id: string;
  title: string;
}

export function buildVideoObjectSchemas(videos: VideoItem[]) {
  return videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: `${video.title} - Beautiful digital invitation video by Shyara Digital. Order custom invitations for your special celebration.`,
    thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    uploadDate: "2026-01-01",
    contentUrl: `https://www.youtube.com/shorts/${video.id}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    publisher: {
      "@type": "Organization",
      name: "Shyara Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://digital.shyara.co.in/android-chrome-s-20260408-512x512.png",
      },
    },
  }));
}
