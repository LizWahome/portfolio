import Image from "next/image";
import { Maximize2 } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {images.map((img) => (
        <figure
          key={img.src}
          className="overflow-hidden rounded-lg border border-border bg-card"
        >
          <a
            href={img.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open larger version of: ${img.caption}`}
            className="group relative flex items-center justify-center bg-surface"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition-opacity group-hover:opacity-90"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/0 transition-colors group-hover:bg-bg/30">
              <Maximize2
                size={28}
                className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </span>
          </a>
          <figcaption className="border-t border-border px-4 py-3 text-sm text-text-secondary">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
