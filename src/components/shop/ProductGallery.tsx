"use client";

import { useState } from "react";
import { assetPath, cn } from "@/lib/utils";

interface Props {
  name: string;
  images: string[];
}

export default function ProductGallery({ name, images }: Props) {
  const [active, setActive] = useState(0);
  const gallery = images.length > 0 ? images : [];

  if (gallery.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ivory-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(gallery[active])}
          alt={`${name} — photo ${active + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {gallery.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                active === i ? "border-gold" : "border-ivory-dark opacity-70 hover:opacity-100"
              )}
              aria-label={`Voir photo ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(src)}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
