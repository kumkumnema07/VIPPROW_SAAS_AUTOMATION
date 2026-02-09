import CardFlip from "../mvpblocks/card-flip";

export default function FlipCardGrid() {
  return (
    <>
      <section className="py-12 md:py-22">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          <CardFlip />
          <CardFlip />
          <CardFlip />
          <CardFlip />
        </div>
      </section>
    </>
  );
}
