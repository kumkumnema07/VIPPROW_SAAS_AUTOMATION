import { AnimatedSVGCard } from "@/components/aceternity-ui/card/AnimatedSVGCard";

export default function ServiceCardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15">
      <AnimatedSVGCard
        href="/digital-marketing"
        title="Digital Marketing"
        description="
Performance-driven digital marketing strategies that build visibility, generate leads, and drive measurable business growth."
      />

      <AnimatedSVGCard
        href="/Software Development"
        title="Software Development"
        description="Custom-built software solutions designed to streamline operations, enhance efficiency, and scale with your business."
      />

      <AnimatedSVGCard
        href="/Business Automation"
        title="Business Automation"
        description="Intelligent automation systems that simplify workflows, reduce manual effort, and accelerate business performance."
      />
    </div>
  );
}

// import { AnimatedSVGCard } from "../aceternity-ui/card/AnimatedSVGCard";

// export default function   ServiceCardGrid() {
//   return (
//     <section className="py-12 md:py-22">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
//         <AnimatedSVGCard href="/digital-marketing"/>
//         <AnimatedSVGCard href="/software-as-a-service"/>
//         <AnimatedSVGCard href="#"/>
//       </div>
//     </section>
//   );
// }
