import type { Dictionary } from "@/i18n/get-dictionary";
import { links } from "@/lib/links";
import Logo from "@/components/ui/logo";

const socials = [
  { label: "Facebook", href: links.facebook },
  { label: "Instagram", href: links.instagram },
  { label: "LinkedIn", href: links.linkedin },
];

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    // The wave SVG is stretched over the whole footer; its wavy top edge is the transition.
    <footer className="bg-[url(/images/footer-wave.svg)] bg-size-[100%_100%] bg-no-repeat px-8 pt-20 pb-8 text-white md:px-12 md:pt-40 xl:min-h-[821px] xl:pt-[216px] xl:pl-[65px]">
      <Logo variant="light" className="w-[130px] md:w-[287px] xl:w-[358px]" />

      <div className="mt-3 flex flex-col gap-3 font-bold md:mt-2 md:gap-6 xl:ml-[14px] xl:gap-[25px]">
        <a
          href={`mailto:${dict.email}`}
          className="text-sm hover:underline md:text-lg xl:text-[20px] xl:leading-[43.2px]"
        >
          {dict.email}
        </a>
        <ul className="flex flex-col gap-1 text-base md:gap-3 md:text-xl xl:text-[25px] xl:leading-[43.2px]">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {social.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-xs font-semibold md:mt-14 xl:mt-[128px] xl:ml-[14px]">
        {dict.copyright}
      </p>
    </footer>
  );
}
