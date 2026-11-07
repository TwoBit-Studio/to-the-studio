import type { Dictionary } from "@/i18n/get-dictionary";
import { links, sectionIds } from "@/lib/links";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section
      id={sectionIds.contact}
      className="scroll-mt-24 pt-[75px] pb-[69px] md:pt-[176px] md:pb-[181px] xl:pt-[254px] xl:pb-[283px]"
    >
      <Container className="flex flex-col items-center gap-5 text-center md:gap-[50px] xl:gap-[30px]">
        <h2 className="type-display">{dict.title}</h2>
        <Button
          href={links.whatsapp}
          variant="whatsapp"
          external
          className="h-[35px] w-[156px] text-[10px] md:h-[60px] md:w-[332px] md:text-[20px] xl:h-[70px] xl:w-[401px] xl:text-[25px]"
        >
          {dict.cta} →
        </Button>
      </Container>
    </section>
  );
}
