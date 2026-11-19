import Link from "next/link";

// Reusable button — renders as a link when href is given,
// otherwise as a normal button.
export default function Button({ children, href, variant = "primary", type, onClick }) {
  const className = `btn btn-${variant}`;
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type || "button"} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
