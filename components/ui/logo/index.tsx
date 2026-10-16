import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

// Same artwork in two colors: dark for the navbar, light for the footer.
const logos = {
  dark: { src: "/images/logo-dark.svg", width: 189, height: 58 },
  light: { src: "/images/logo-light.svg", width: 358, height: 112 },
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const logo = logos[variant];
  return (
    <Image
      src={logo.src}
      width={logo.width}
      height={logo.height}
      alt="2theStüdio"
      className={`h-auto ${className}`}
      priority={variant === "dark"}
    />
  );
}
