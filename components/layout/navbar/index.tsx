import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/links";
import LanguageSwitch from "@/components/ui/language-switch";
import Logo from "@/components/ui/logo";

type NavbarProps = {
  lang: Locale;
  dict: Dictionary["nav"];
};

export default function Navbar({ lang, dict }: NavbarProps) {
  const items = [
    { href: `#${sectionIds.services}`, label: dict.services },
    { href: `#${sectionIds.process}`, label: dict.process },
    { href: `#${sectionIds.faq}`, label: dict.faq },
    { href: `#${sectionIds.contact}`, label: dict.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="flex items-center justify-between px-[30px] py-[18px] md:h-[94px] md:pt-[30px] md:pr-[35px] md:pb-[15px] md:pl-20 xl:h-auto">
        <a href={`/${lang}`} aria-label="2theStüdio home">
          <Logo className="w-[95px] md:w-[189px]" />
        </a>

        {/* Tablet / desktop */}
        <div className="hidden items-center gap-[5px] text-[15px] leading-[43.2px] md:flex xl:gap-[25px] xl:text-[18px]">
          <ul className="flex gap-[5px] xl:gap-[25px]">
            {items.map((item) => (
              <li key={item.href} className="p-2.5">
                <a href={item.href} className="hover:font-normal">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-2.5">
            <LanguageSwitch lang={lang} />
          </div>
        </div>

        {/* Mobile: <details> gives an open/close menu without client JS */}
        <details className="group relative md:hidden">
          <summary
            aria-label="Menu"
            className="-mr-[8.5px] flex size-8 cursor-pointer list-none flex-col items-center justify-center gap-[1.5px] [&::-webkit-details-marker]:hidden"
          >
            <span className="h-px w-[15px] bg-ink transition group-open:translate-y-[1.25px] group-open:rotate-45" />
            <span className="h-px w-[15px] bg-ink transition group-open:-translate-y-[1.25px] group-open:-rotate-45" />
          </summary>
          <div className="absolute right-0 mt-3 flex w-52 flex-col gap-4 rounded-3xl border border-ink bg-background p-6 text-lg">
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <LanguageSwitch lang={lang} />
          </div>
        </details>
      </nav>
    </header>
  );
}
