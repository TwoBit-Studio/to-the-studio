import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";

// "EN | ES" toggle. Each locale is its own route (/en, /es).
export default function LanguageSwitch({ lang }: { lang: Locale }) {
  return (
    <div className="flex items-center gap-1">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span>|</span>}
          <Link
            href={`/${locale}`}
            aria-current={locale === lang ? "page" : undefined}
            className={locale === lang ? "font-semibold" : "hover:font-normal"}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
