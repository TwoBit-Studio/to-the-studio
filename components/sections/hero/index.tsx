import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative pt-16 pb-48 md:pt-32 md:pb-80 xl:min-h-[928px] xl:pt-[177px] xl:pb-0">
      <Container className="flex flex-col items-center gap-6 text-center xl:gap-[35px]">
        <div className="flex flex-col items-center gap-5 xl:gap-7">
          <h1 className="type-h1">{dict.title}</h1>
          <p className="max-w-[1160px] type-lead xl:-mx-10">{dict.description}</p>
        </div>
        <Button href={`#${sectionIds.contact}`} className="xl:mt-[86px]">
          {dict.cta}
        </Button>
      </Container>

      {/* The "Ü" mascot, tilted, bottom right */}
      <Image
        src="/images/mascot.svg"
        alt=""
        width={234}
        height={377}
        loading="eager"
        className="absolute right-[12%] bottom-6 w-[90px] -rotate-[18.51deg] md:w-[150px] xl:right-[11.5%] xl:bottom-[-60px] xl:w-[234px]"
      />
    </section>
  );
}
