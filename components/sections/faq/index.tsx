import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import Container from "@/components/ui/container";
import RichText from "@/components/ui/rich-text";

export default function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section id={sectionIds.faq} className="scroll-mt-24 pt-16 md:pt-24 xl:pt-[134px]">
      <Container>
        <h2 className="type-h2">{dict.title}</h2>

        <dl className="mx-auto mt-12 grid max-w-[1092px] gap-x-10 gap-y-12 md:grid-cols-2 xl:mt-[129px] xl:gap-x-[88px] xl:gap-y-[90px]">
          {dict.items.map((item) => (
            <div key={item.question} className="flex flex-col gap-3 text-center xl:gap-[30px]">
              <dt className="type-h3">{item.question}</dt>
              <dd className="type-body">
                <RichText text={item.answer} />
              </dd>
            </div>
          ))}
        </dl>

        <hr className="mt-16 border-foreground xl:mt-[149px]" />
      </Container>
    </section>
  );
}
