import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative pt-[84px] md:min-h-[944px] md:pt-[192px] xl:min-h-[929px] xl:pt-[177px]">
      <Container className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-7">
          <h1 className="type-h1">{dict.title}</h1>
          <p className="type-lead md:max-w-[597px] xl:max-w-[1160px]">{dict.description}</p>
        </div>
        <Button
          href={`#${sectionIds.contact}`}
          className="mt-10 h-[45px] px-[27px] text-lg md:mt-[43px] md:h-[66px] md:px-10 md:text-[25px] md:leading-[43.2px] xl:mt-[45px]"
        >
          {dict.cta}
        </Button>
      </Container>

      {/* The "Ü" mascot, tilted, bottom right. Not shown in the mobile design. */}
      <Image
        src="/images/mascot.svg"
        alt=""
        width={234}
        height={377}
        loading="eager"
        className="absolute right-20 bottom-[27px] hidden w-[234px] -rotate-[18.51deg] md:block xl:right-[11.26%]"
      />
    </section>
  );
}
