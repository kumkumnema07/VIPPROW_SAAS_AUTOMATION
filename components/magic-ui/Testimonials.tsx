/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const reviews = [
  {
    name: "Client Name",
    username: "Client Dep. 1",
    body: "I don't know what to say. I'm speechless. <span>This is amazing. I don't know what to say. I'm speechless.</span> This is amazing. I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Client Name",
    username: "Client Dep. 2",
    body: "I don't know what to say. I'm speechless. <span>This is amazing. I don't know what to say. I'm speechless.</span> This is amazing. I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Client Name",
    username: "Client Dep. 3",
    body: "I don't know what to say. I'm speechless. <span>This is amazing. I don't know what to say. I'm speechless.</span> This is amazing. I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Client Name",
    username: "Client Dep. 4",
    body: "I don't know what to say. I'm speechless. <span>This is amazing. I don't know what to say. I'm speechless.</span> This is amazing. I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jack",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-96",
        // light styles
        "border-[#27272A] bg-[#27272A] hover:bg-[#27272A]",
        // dark styles
        "dark:border-[#27272A] dark:bg-[#27272A] dark:hover:bg-[#27272A]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <blockquote
            className="
                mb-5 text-sm font-heading
                text-zinc-200
                [&_span]:text-blue-500
                [&_span]:font-medium
              "
            dangerouslySetInnerHTML={{ __html: body }}
          />

          <div className="flex items-center gap-x-2">
            <img
              className="rounded-full"
              width="32"
              height="32"
              alt=""
              src={img}
            />
            <div>
              <figcaption className="text-sm font-medium dark:text-white font-heading">
                {name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40 font-heading mt-1">
                {username}
              </p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export function TestimonialMarquee() {
  return (
    <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden bg-black my-20">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
