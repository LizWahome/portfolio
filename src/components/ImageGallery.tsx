import Image from "next/image";

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
          <div className="flex items-center justify-center bg-surface">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-3 text-sm text-text-secondary">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
