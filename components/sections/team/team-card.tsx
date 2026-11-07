import Image from "next/image";
import type { TeamMember } from "@/lib/team";
import Button from "@/components/ui/button";

// One Figma pixel, scaled so the whole card fits its container (--u is set below).
const u = (px: number) => `calc(var(--u) * ${px})`;

const box = (b: { left: number; top: number; width: number; height?: number }) => ({
  left: u(b.left),
  top: u(b.top),
  width: u(b.width),
  ...(b.height !== undefined && { height: u(b.height) }),
});

type TeamCardProps = {
  member: TeamMember;
  linkedinLabel: string;
  className?: string;
};

export default function TeamCard({ member, linkedinLabel, className = "" }: TeamCardProps) {
  const { frame, card, photo, fade, head, text } = member;

  return (
    <div
      className={`w-full ${className}`}
      style={{ maxWidth: frame.width, containerType: "inline-size" }}
    >
      <div
        className="relative"
        style={
          {
            "--u": `calc(100cqw / ${frame.width})`,
            aspectRatio: `${frame.width} / ${frame.height}`,
          } as React.CSSProperties
        }
      >
        {/* Card, with the photo clipped inside it */}
        <div
          className="absolute overflow-hidden bg-foreground"
          style={{ ...box(card), borderRadius: u(85) }}
        >
          <Image
            src={photo.src}
            alt={member.name}
            width={Math.round(photo.width * 2)}
            height={Math.round(photo.height * 2)}
            className="absolute max-w-none"
            style={{
              ...box({ ...photo, left: photo.left - card.left, top: photo.top - card.top }),
              maskImage: `url("${fade.src}")`,
              maskRepeat: "no-repeat",
              maskSize: `${u(fade.width)} ${u(fade.height)}`,
              maskPosition: `${u(fade.x)} ${u(fade.y)}`,
            }}
          />
        </div>

        {/* Top of the head, sticking out above the card */}
        <Image
          src={head.src}
          alt=""
          width={Math.round(head.width * 2)}
          height={Math.round(head.height * 2)}
          className="absolute max-w-none"
          style={box(head)}
        />

        {/* Text sizes don't scale with the card in Figma: each frame sets its own,
            and the block sits a bit higher on smaller cards. */}
        <div
          className="absolute top-[45.3%] flex -translate-x-1/2 flex-col items-center whitespace-nowrap text-center text-white md:top-[51.4%] xl:top-(--text-top)"
          style={
            {
              left: u(text.left + text.width / 2),
              "--text-top": `${(text.top / frame.height) * 100}%`,
            } as React.CSSProperties
          }
        >
          <h3 className="-mb-5 text-[15px] leading-[43.2px] font-semibold md:-mb-[15px] md:text-[18px] xl:-mb-[11px] xl:text-[25px]">
            {member.name}
          </h3>
          <p className="text-[8px] leading-[31px] md:text-[10px] xl:text-[12px]">{member.role}</p>
          <Button
            href={member.linkedin}
            variant="linkedin"
            external
            className="mt-[3px] h-[23px] w-[73px] text-[7px] md:mt-[5px] md:h-[27px] md:w-[81px] md:text-[8px] xl:mt-[21px] xl:h-[30px] xl:w-[114px] xl:text-[12px]"
          >
            {linkedinLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
