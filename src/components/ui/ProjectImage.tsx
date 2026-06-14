import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  frameless?: boolean;
};

export function ProjectImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  frameless = false,
}: ProjectImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#0a0a0e] ${frameless ? "" : "border border-border"} ${className}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
