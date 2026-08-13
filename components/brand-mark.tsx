import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  priority?: boolean;
  className?: string;
};

export function BrandMark({
  compact = false,
  priority = false,
  className = "",
}: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={"brand-mark " + className}
      aria-label="StackOrcs home"
    >
      <span className="brand-mark__image" aria-hidden="true">
        <Image
          src="/stackorcs-logo.png"
          alt=""
          fill
          preload={priority}
          sizes="48px"
        />
      </span>
      {!compact && (
        <span className="brand-mark__word">
          Stack<span>Orcs</span>
        </span>
      )}
    </Link>
  );
}
