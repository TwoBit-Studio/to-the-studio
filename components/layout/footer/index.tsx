import type { Dictionary } from "@/i18n/get-dictionary";
import { links } from "@/lib/links";
import Logo from "@/components/ui/logo";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const contacts = [
    { label: "Facebook", href: links.facebook },
    { label: "Instagram", href: links.instagram },
    { label: "LinkedIn", href: links.linkedin },
    { label: "WhatsApp", href: links.whatsapp },
    { label: "Email", href: `mailto:${dict.email}` },
  ];

  return (
    // The wave SVG is stretched over the whole footer; its wavy top edge is the transition.
    // The logo runs off the bottom of the page, so the footer clips it.
    <footer className="flex flex-col items-center gap-[25px] overflow-hidden bg-[url(/images/footer-wave.svg)] bg-size-[100%_100%] bg-no-repeat px-[7px] pt-[47px] text-white md:gap-[70px] md:px-3 md:pt-[108px] xl:gap-[103px] xl:px-4 xl:pt-[179px]">
      <ul className="flex gap-[35px] text-[8px] leading-[43.2px] md:gap-[50px] md:text-[18px] xl:gap-[75px] xl:text-[25px]">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.href}
              {...(!contact.href.startsWith("mailto:") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="hover:underline"
            >
              {contact.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Bottom 15.6% of the logo is cut off in every frame (4.88% of its width). */}
      <Logo variant="light" className="mb-[-4.88%] w-full" />
    </footer>
  );
}
