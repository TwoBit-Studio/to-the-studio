import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import Container from "@/components/ui/container";
import RichText from "@/components/ui/rich-text";

export default function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section
      id={sectionIds.services}
      className="scroll-mt-24 pt-[120px] pb-[94px] md:pt-[109px] md:pb-[109px] xl:pt-[69px] xl:pb-[133px]"
    >
      <Container>
        <h2 className="type-h2">{dict.title}</h2>
        <hr className="mt-[25px] border-foreground md:mt-[35px] xl:mt-[78px]" />

        <ul className="mx-auto mt-[35px] flex max-w-[274px] flex-col gap-[35px] md:mt-[53px] md:max-w-none md:gap-[53px] xl:mt-[77px] xl:gap-[78px]">
          {dict.items.map((service) => (
            <li
              key={service.title}
              className="flex flex-col text-center md:flex-row md:items-center md:gap-[92px] xl:justify-between xl:gap-10 xl:px-[10px]"
            >
              <h3 className="type-h3 md:flex-1 xl:flex-none">{service.title}</h3>
              <p className="type-body md:w-[399px] md:max-w-[60%] md:shrink-0 xl:w-[524px] xl:max-w-none">
                <RichText text={service.description} />
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
