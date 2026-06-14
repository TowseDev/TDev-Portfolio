import Image from "next/image";
import Link from "next/link";

export type WorkPlateData = {
  index: string;
  category: string;
  title: string;
  description: string;
  href: string;
  viewLabel: string;
  image?: string;
  imagePosition?: string;
  placeholder?: boolean;
};

function PlatePlaceholder() {
  return (
    <svg
      className="plate-placeholder"
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="48"
        y1="48"
        x2="592"
        y2="48"
        stroke="rgba(20,22,27,0.18)"
        strokeWidth="1"
      />
      <line
        x1="48"
        y1="48"
        x2="48"
        y2="352"
        stroke="rgba(20,22,27,0.18)"
        strokeWidth="1"
      />
      <rect x="48" y="72" width="180" height="12" fill="rgba(20,22,27,0.35)" />
      <rect x="48" y="96" width="260" height="12" fill="rgba(20,22,27,0.2)" />
      <rect x="48" y="120" width="120" height="12" fill="rgba(20,22,27,0.12)" />
      <rect x="48" y="156" width="96" height="28" fill="#1B43E8" opacity="0.85" />
      <g stroke="rgba(20,22,27,0.22)" strokeWidth="1">
        <rect x="360" y="72" width="112" height="112" />
        <rect x="480" y="72" width="112" height="112" />
        <rect x="360" y="196" width="232" height="72" />
      </g>
      <circle cx="416" cy="108" r="12" fill="#1B43E8" opacity="0.7" />
      <circle cx="536" cy="108" r="12" fill="rgba(20,22,27,0.25)" />
      <rect x="384" y="132" width="64" height="8" fill="rgba(20,22,27,0.2)" />
      <rect x="504" y="132" width="64" height="8" fill="rgba(20,22,27,0.15)" />
      <rect x="384" y="220" width="160" height="8" fill="rgba(20,22,27,0.18)" />
      <rect x="384" y="236" width="112" height="8" fill="rgba(20,22,27,0.1)" />
      <text
        x="48"
        y="330"
        fontFamily="var(--mono, monospace)"
        fontSize="10"
        fill="rgba(20,22,27,0.38)"
        letterSpacing="0.08em"
      >
        web · ecommerce · marketing · support
      </text>
    </svg>
  );
}

export function WorkPlate({
  index,
  category,
  title,
  description,
  image,
  href,
  viewLabel,
  imagePosition = "top center",
  placeholder = false,
}: WorkPlateData) {
  return (
    <Link href={href} className="plate">
      <div className="plate-canvas">
        <span className="plate-index">{index}</span>
        <span className="plate-sector">{category}</span>
        <div className="plate-image-frame">
          {placeholder || !image ? (
            <PlatePlaceholder />
          ) : (
            <Image
              src={image}
              alt={title}
              fill
              className="plate-image"
              style={{ objectPosition: imagePosition }}
              sizes="(max-width: 860px) 100vw, 580px"
              priority={index === "PLATE 01"}
            />
          )}
          <span className="plate-image-wash" aria-hidden="true" />
        </div>
      </div>
      <div className="plate-foot">
        <div className="plate-foot-copy">
          <div className="plate-name">{title}</div>
          <div className="plate-desc">{description}</div>
        </div>
        <span className="plate-view">{viewLabel}</span>
      </div>
    </Link>
  );
}
