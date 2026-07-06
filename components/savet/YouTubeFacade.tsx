"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function YouTubeFacade({
  videoId,
  caption,
}: {
  videoId: string;
  caption?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div>
        {caption ? (
          <p className="mb-4 text-center text-sm text-muted">{caption}</p>
        ) : null}
        <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-black shadow-sm">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="How to use SaveT"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      {caption ? (
        <p className="mb-4 text-center text-sm text-muted">{caption}</p>
      ) : null}
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="group relative block w-full overflow-hidden rounded-2xl border border-border shadow-sm"
        aria-label="Play SaveT walkthrough video"
      >
        <Image
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt="SaveT video thumbnail"
          width={1280}
          height={720}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-foreground shadow-lg">
            <Play className="ml-1 h-7 w-7" />
          </span>
        </span>
      </button>
    </div>
  );
}
