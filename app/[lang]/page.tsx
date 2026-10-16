import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Team from "@/components/sections/team";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} dict={dict.nav} />
      <main className="flex-1">
        <Hero dict={dict.hero} />
        <Services dict={dict.services} />
        <Process dict={dict.process} />
        <Team dict={dict.team} />
        <Faq dict={dict.faq} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
