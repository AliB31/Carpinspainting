import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Matt Wong",
    badge: "Local Guide · 50 reviews · 5 photos",
    time: "6 months ago",
    text: "Had a great experience with Nick. Dependable, hard working and knowledgeable, Nick was able to guide my wife and I through the confusing world of paint brands, swatches and stain types. He arrived on-time, informed us of each step, and kept us aware on where we stood within the estimated cost at the end of each day of work. He also made sure we were happy with the results throughout the process. Will definitely be using him again, and would not hesitate to recommend his services to others!",
    rating: 5,
  },
  {
    name: "Chelsea Walters",
    badge: "Local Guide · 24 reviews · 18 photos",
    time: "6 months ago",
    text: "Nick from Carpin's Painting did an outstanding job painting my kitchen and living room! From start to finish, he was professional. He took the time to properly prepare the spaces, ensuring clean lines and a smooth finish. The quality of his work really transformed both rooms—they look brighter, fresher, and better than I imagined. I couldn't be happier with the outcome and would highly recommend Nick and Carpin's Painting to anyone looking for reliable, high-quality painting services.",
    rating: 5,
  },
  {
    name: "Lisa Rodgers",
    badge: "2 reviews",
    time: "8 months ago",
    text: "We recently had the entire interior of our home painted by Nick with Carpin Painting. He did a fantastic job! From the initial communication to after the job was finished, he was professional, easy to work with and an excellent painter. I will continue to use Nick with Carpin Painting for all my painting needs and will happily recommend him to my friends.",
    rating: 5,
  },
  {
    name: "Val Cauther",
    badge: "4 reviews · 1 photo",
    time: "a year ago",
    text: "My experience with Nick was nothing short of awesome. He was on time and professional. Gave great estimate and we love our house!!!!",
    rating: 5,
  },
  {
    name: "Tyneshia Andrews",
    badge: "3 reviews",
    time: "a year ago",
    text: "Nick was exceptional when painting the house. Always in a great mood, very accommodating, and exceeded my expectations. The house looks great and I would definitely go back if I needed another paint job!!!",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-black/40 font-medium mb-3">Testimonials</p>
            <h2 className="text-4xl font-bold text-black">What Our Clients Say</h2>
            <p className="text-black/60 mt-3 max-w-[65ch]">See how we've helped homeowners transform their spaces.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} disabled={!canScrollLeft} className="p-3 rounded-full border border-black/10 bg-white text-black disabled:opacity-30 hover:bg-black hover:text-white transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll("right")} disabled={!canScrollRight} className="p-3 rounded-full border border-black/10 bg-white text-black disabled:opacity-30 hover:bg-black hover:text-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} onScroll={checkScroll} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }} viewport={{ once: true }} className="snap-start shrink-0 w-[350px] md:w-[420px] bg-white border border-black/10 rounded-xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-black text-black" />
                ))}
              </div>
              <p className="text-black text-sm leading-relaxed mb-6" style={{ textWrap: "pretty" } as React.CSSProperties}>
                "{t.text}"
              </p>
              <div className="border-t border-black/5 pt-4">
                <p className="font-semibold text-black text-sm">{t.name}</p>
                <p className="text-xs text-black/40 tabular-nums mt-0.5">{t.badge} · {t.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
