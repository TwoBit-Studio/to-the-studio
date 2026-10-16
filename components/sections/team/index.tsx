import type { Dictionary } from "@/i18n/get-dictionary";
import { team } from "@/lib/team";
import Container from "@/components/ui/container";
import TeamCard from "./team-card";

export default function Team({ dict }: { dict: Dictionary["team"] }) {
  return (
    <section className="pt-16 md:pt-24 xl:pt-[143px]">
      <Container>
        <div className="mx-auto flex max-w-[1082px] flex-col gap-5 text-center xl:gap-7">
          <h2 className="type-h1">{dict.title}</h2>
          <p className="type-lead">{dict.description}</p>
        </div>

        {/* Mobile: cards staggered left/right like the design; desktop: side by side */}
        <div className="mt-12 flex flex-col gap-4 md:mt-[50px] md:flex-row md:items-center md:justify-center md:gap-10 xl:gap-[92px]">
          {team.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              linkedinLabel={dict.linkedin}
              className={`max-md:w-[75%]! ${i % 2 ? "max-md:self-end" : ""}`}
            />
          ))}
        </div>

        <hr className="mt-16 border-ink md:mt-40 xl:mt-[300px]" />
      </Container>
    </section>
  );
}
