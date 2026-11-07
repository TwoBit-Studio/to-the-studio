import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import Container from "@/components/ui/container";
import RichText from "@/components/ui/rich-text";

export default function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section id={sectionIds.faq} className="scroll-mt-24 pt-[61px] md:pt-[23px] xl:pt-[134px]">
      <Container>
        <h2 className="type-h2">{dict.title}</h2>

        <dl className="mx-auto mt-[61px] grid max-w-[274px] gap-y-[25px] md:-mx-7 md:mt-[65px] md:max-w-none md:grid-cols-2 md:items-center md:gap-y-[45px] xl:mx-auto xl:mt-[129px] xl:max-w-[1092px] xl:gap-x-[88px] xl:gap-y-[90px]">
          {dict.items.map((item) => (
            <div key={item.question} className="flex flex-col text-center md:gap-2 xl:gap-[30px]">
              <dt className="type-h3">{item.question}</dt>
              <dd className="type-body md:px-[18px] md:text-[13px] md:leading-[35px] xl:px-0 xl:text-[20px] xl:leading-[43.2px]">
                <RichText text={item.answer} />
              </dd>
            </div>
          ))}
        </dl>

        <hr className="mt-[61px] border-foreground md:mt-[65px] xl:mt-[149px]" />
      </Container>
    </section>
  );
}
