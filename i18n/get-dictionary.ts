import type { Locale } from "./config";
import type en from "./dictionaries/en";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
