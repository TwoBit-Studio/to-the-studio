// Team members and their card artwork. All geometry is in Figma pixels,
// measured on the desktop frame; TeamCard scales it to the available width.
type Box = { left: number; top: number; width: number; height: number };

export type TeamMember = {
  name: string;
  role: string;
  linkedin: string;
  /** Card frame size in Figma */
  frame: { width: number; height: number };
  /** Dark rounded card */
  card: Box;
  /** Full cut-out photo, clipped to the card and faded at the bottom */
  photo: Box & { src: string };
  /** Radial fade mask applied to the photo (offset is relative to the photo) */
  fade: { src: string; width: number; height: number; x: number; y: number };
  /** Top of the photo that pops out above the card */
  head: Box & { src: string };
  /** Name / role / LinkedIn block */
  text: { left: number; top: number; width: number };
};

export const team: TeamMember[] = [
  {
    name: "Hector Lopez Jr.",
    role: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/", // TODO: real profile URL
    frame: { width: 547, height: 453 },
    card: { left: 0, top: 156, width: 547, height: 297 },
    photo: { src: "/images/team/hector.png", left: 0, top: 0, width: 331.35, height: 441.8 },
    fade: { src: "/images/team/hector-fade.svg", width: 493, height: 509.86, x: -90, y: 0 },
    head: { src: "/images/team/hector-head.png", left: 0, top: 0, width: 331, height: 156 },
    text: { left: 314, top: 249, width: 191 },
  },
  {
    name: "Daniel Garcia",
    role: "Fullstack Developer",
    linkedin: "https://www.linkedin.com/", // TODO: real profile URL
    frame: { width: 549, height: 460 },
    card: { left: 0, top: 163, width: 547, height: 297 },
    photo: { src: "/images/team/daniel.png", left: 225.6, top: 0, width: 322.82, height: 468.82 },
    fade: { src: "/images/team/daniel-fade.svg", width: 582, height: 465.07, x: -129.6, y: 38 },
    head: { src: "/images/team/daniel-head.png", left: 226, top: 0, width: 323, height: 163 },
    text: { left: 52, top: 256, width: 191 },
  },
];
