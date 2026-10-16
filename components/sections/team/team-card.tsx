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

        <div
          className="absolute flex flex-col items-center text-center text-white"
          style={{ ...box(text), gap: u(15) }}
        >
          <div>
            <h3 className="whitespace-nowrap font-semibold" style={{ fontSize: u(25), lineHeight: 1.4 }}>
              {member.name}
            </h3>
            <p style={{ fontSize: u(12) }}>{member.role}</p>
          </div>
          <Button
            href={member.linkedin}
            variant="dark"
            size="sm"
            external
            className="h-auto! px-0!"
          >
            <span style={{ fontSize: u(12), width: u(114), lineHeight: u(30) }}>
              {linkedinLabel} ↗
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
