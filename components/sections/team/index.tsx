import type { Dictionary } from "@/i18n/get-dictionary";
import { team } from "@/lib/team";
import Container from "@/components/ui/container";
import TeamCard from "./team-card";

export default function Team({ dict }: { dict: Dictionary["team"] }) {
  return (
    <section className="pt-[103px] md:pt-[111px] xl:pt-[143px]">
      <Container>
        <div className="mx-auto flex flex-col gap-7 text-center md:max-w-[597px] xl:max-w-[1082px]">
          <h2 className="type-h1">{dict.title}</h2>
          <p className="type-lead max-md:leading-[43.2px]">{dict.description}</p>
        </div>

        {/* Mobile: cards staggered left/right and overlapping like the design; tablet/desktop: side by side */}
        <div className="flex flex-col md:mt-[23px] md:-mx-6 md:flex-row md:items-center md:justify-center md:gap-[25px] xl:mx-0 xl:mt-[50px] xl:gap-[92px]">
          {team.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              linkedinLabel={dict.linkedin}
              className={`max-md:w-[73%]! ${i % 2 ? "max-md:-mt-6 max-md:self-end" : ""}`}
            />
          ))}
        </div>

        <hr className="mt-[89px] border-ink md:mt-[176px] xl:mt-[300px]" />
      </Container>
    </section>
  );
}
