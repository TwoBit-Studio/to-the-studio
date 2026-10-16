import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import Container from "@/components/ui/container";

export default function Process({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section
      id={sectionIds.process}
      className="scroll-mt-24 rounded-[40px] bg-foreground py-16 text-background md:rounded-[60px] md:py-28 xl:rounded-[85px] xl:pt-[182px] xl:pb-[187px]"
    >
      <Container>
        <div className="flex max-w-[888px] flex-col gap-4 xl:gap-[25px]">
          <h2 className="type-h2">{dict.title}</h2>
          <p className="type-lead">{dict.description}</p>
        </div>

        <ol className="mt-12 xl:mt-[77px]">
          {dict.steps.map((step, i) => (
            <li
              key={step.title}
              className="border-t border-background py-10 text-center last:pb-0 md:py-14 xl:py-[83px]"
            >
              <div className="mx-auto flex max-w-[788px] flex-col gap-4 xl:gap-[25px]">
                <h3 className="type-h2">
                  {String(i + 1).padStart(2, "0")} / {step.title}
                </h3>
                <p className="type-lead">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
