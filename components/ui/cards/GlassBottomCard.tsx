import Image from "next/image";

interface GlassBottomCardProps {
  image: string;
  title: string;
  subtitle: string;
  tag?: string;
}

export default function GlassBottomCard({
  image,
  title,
  subtitle,
  tag,
}: GlassBottomCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl min-w-[260px]">
      {/* IMAGE */}
      <Image
        src="/assets/images/articals/1x1.webp"
        alt={title}
        width={250}
        height={250}
        className="w-full h-[300px] object-cover"
        priority
      />

      {/* GLASS BOTTOM OVERLAY */}
      <div
        className="
          absolute inset-x-0 bottom-0
          bg-white/10
          backdrop-blur-xl backdrop-saturate-150
          border-t border-white/20
          px-5 py-4
          flex items-center justify-between
        "
      >
        <div>
          <h4 className="text-sm font-semibold font-heading text-white">
            {title}
          </h4>
          <p className="text-xs text-white/70">{subtitle}</p>
        </div>

        {tag && (
          <p className="text-xs font-heading italic text-white font-bold">
            — {tag}
          </p>
        )}
      </div>
    </div>
  );
}
