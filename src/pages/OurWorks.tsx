import { motion } from "framer-motion";
import { REAL_IMAGES } from "@/lib/images";

const works = [
  { img: REAL_IMAGES.interior, title: "Modern Dining Room", category: "Interior" },
  { img: REAL_IMAGES.exterior, title: "Craftsman Home Exterior", category: "Exterior" },
  { img: REAL_IMAGES.commercial, title: "Commercial Space", category: "Commercial" },
  { img: REAL_IMAGES.woodStaining, title: "Fence Staining", category: "Staining" },
  { img: REAL_IMAGES.hero, title: "Residential Portfolio", category: "Exterior" },
  { img: REAL_IMAGES.interior, title: "Accent Wall Bedroom", category: "Interior" },
];

const OurWorks = () => {
  return (
    <div>
      {/* Hero - Black */}
      <section className="relative h-[40vh] min-h-[350px] flex items-end bg-black">
        <div className="container mx-auto px-6 pb-16">
          <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-2">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Works</h1>
          <p className="text-white/60 mt-3 max-w-[65ch]">Browse our gallery of completed projects across the Triangle area.</p>
        </div>
      </section>

      {/* Gallery - White */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (i % 3) * 0.1 }} viewport={{ once: true }} className="group rounded-xl overflow-hidden shadow-lg bg-white border border-black/5">
                <div className="h-64 overflow-hidden">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-widest text-black/40 font-medium">{w.category}</span>
                  <h3 className="text-base font-semibold text-black mt-1">{w.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Black */}
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Want Results Like These?</h2>
          <p className="text-white/60 mt-4 max-w-md mx-auto">Get a free estimate for your next painting project.</p>
          <a href="mailto:nick@carpinspainting.org" className="inline-flex items-center gap-2 mt-8 rounded-[8px] bg-white text-black px-8 py-3.5 font-semibold text-sm hover:shadow-lg transition-all active:scale-95">
            Request Your Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurWorks;
