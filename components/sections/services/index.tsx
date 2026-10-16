import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import Container from "@/components/ui/container";
import RichText from "@/components/ui/rich-text";

export default function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section
      id={sectionIds.services}
      className="scroll-mt-24 pt-10 pb-16 md:pt-16 md:pb-24 xl:pt-[69px] xl:pb-[133px]"
    >
      <Container>
        <h2 className="type-h2">{dict.title}</h2>
        <hr className="mt-8 border-foreground xl:mt-[78px]" />

        <ul className="mt-10 flex flex-col gap-10 md:gap-14 xl:mt-[77px] xl:gap-[78px]">
          {dict.items.map((service) => (
            <li
              key={service.title}
              className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:gap-10 xl:px-[10px]"
            >
              <h3 className="type-h3 md:text-left">{service.title}</h3>
              <p className="type-body md:w-[48%] xl:w-[524px]">
                <RichText text={service.description} />
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
