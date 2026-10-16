import type { Dictionary } from "@/i18n/get-dictionary";
import { links, sectionIds } from "@/lib/links";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section
      id={sectionIds.contact}
      className="scroll-mt-24 py-16 md:py-28 xl:pt-[254px] xl:pb-[274px]"
    >
      <Container className="flex flex-col items-center gap-6 text-center xl:gap-[30px]">
        <h2 className="type-display">{dict.title}</h2>
        <Button href={links.whatsapp} external className="xl:w-[401px]">
          {dict.cta} →
        </Button>
      </Container>
    </section>
  );
}
