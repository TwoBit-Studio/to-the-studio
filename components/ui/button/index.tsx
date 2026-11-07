type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "whatsapp" | "linkedin";
  external?: boolean;
  className?: string;
};

// Default and hover states from the button components in Figma ("Components" page).
// Sizes differ per call site, so they come in through className.
const variants = {
  // "Let's talk"
  default: "border-ink bg-background text-ink hover:bg-ink hover:text-background",
  // "Message on WhatsApp"
  whatsapp: "border-ink bg-background text-ink hover:border-whatsapp hover:bg-whatsapp",
  // "LinkedIn" on the team cards
  linkedin: "border-white bg-foreground text-white hover:border-linkedin hover:bg-linkedin",
};

// Pill-shaped outline link.
export default function Button({
  href,
  children,
  variant = "default",
  external = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border font-light transition-colors hover:font-normal ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
