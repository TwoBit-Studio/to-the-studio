type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  size?: "lg" | "sm";
  external?: boolean;
  className?: string;
};

const variants = {
  light: "border-ink bg-background text-ink hover:bg-ink hover:text-background",
  dark: "border-white bg-foreground text-white hover:bg-white hover:text-foreground",
};

const sizes = {
  // "Let's talk" / "Message on WhatsApp"
  lg: "px-8 py-2 text-lg xl:px-10 xl:py-[11px] xl:text-[25px] xl:leading-[43.2px]",
  // "LinkedIn ↗" on the team cards
  sm: "h-8 px-6 text-xs",
};

// Pill-shaped outline link.
export default function Button({
  href,
  children,
  variant = "light",
  size = "lg",
  external = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border font-light transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
