"use client";

import { useState } from "react";
import Image from "next/image";
import StickerPeel from "@/components/ui/sticker-peel";

type Point = { x: number; y: number };

// The "Ü" mascot as a sticker you can peel and drag around the hero.
// The static image renders first (and without JS) and marks where the sticker starts;
// it's hidden once the sticker takes over. Not shown in the mobile design.
export default function MascotSticker() {
  const [start, setStart] = useState<Point | null>(null);

  // StickerPeel positions itself as an offset from the center of its parent (this layer).
  const measure = (image: HTMLImageElement | null) => {
    const layer = image?.parentElement;
    if (!image || !layer || start) return;

    const box = image.getBoundingClientRect();
    const bounds = layer.getBoundingClientRect();
    if (!bounds.width) return; // Layer hidden (mobile)

    setStart({
      x: box.left + box.width / 2 - (bounds.left + bounds.width / 2),
      y: box.top + box.height / 2 - (bounds.top + bounds.height / 2),
    });
  };

  return (
    // Clips the sticker's canvas, which is larger than the sticker, so it can't cause page overflow.
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      <Image
        ref={measure}
        src="/images/mascot.svg"
        alt=""
        width={234}
        height={377}
        loading="eager"
        className={`absolute right-20 bottom-[27px] w-[234px] -rotate-[18.51deg] xl:right-[11.26%] ${start ? "invisible" : ""}`}
      />
      {start && (
        <StickerPeel
          imageSrc="/images/mascot.svg"
          width={234}
          rotate={-18.51}
          initialPosition={start}
        />
      )}
    </div>
  );
}
