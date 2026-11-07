import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import Container from "@/components/ui/container";

export default function Process({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section
      id={sectionIds.process}
      className="scroll-mt-24 rounded-[85px] bg-foreground pt-[91px] pb-[62px] text-background md:pt-[120px] md:pb-[92px] xl:pt-[182px] xl:pb-[187px]"
    >
      <Container>
        <div className="flex max-w-[260px] flex-col gap-5 md:max-w-[500px] md:gap-[15px] xl:max-w-[888px] xl:gap-[25px]">
          <h2 className="type-h2">{dict.title}</h2>
          <p className="type-lead md:text-[20px] xl:text-[25px]">{dict.description}</p>
        </div>

        <ol className="mt-[78px] md:mt-[50px] xl:mt-[77px]">
          {dict.steps.map((step, i) => (
            <li
              key={step.title}
              className="border-t border-background py-12 text-center last:pb-0 md:py-[52px] xl:py-[83px]"
            >
              <div className="mx-auto flex max-w-[249px] flex-col gap-5 md:max-w-[500px] md:gap-[15px] xl:max-w-[788px] xl:gap-[25px]">
                <h3 className="type-h2">
                  {String(i + 1).padStart(2, "0")} / {step.title}
                </h3>
                <p className="type-lead md:text-[20px] xl:text-[25px]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
