import { motion } from "framer-motion";
import { REAL_IMAGES } from "@/lib/images";

const services = [
  {
    title: "Interior Painting",
    desc: "Transform your living spaces with expert interior painting. We handle surface prep, minor drywall repair, and apply premium finishes that bring your vision to life. From accent walls to full-room makeovers, we deliver flawless results with clean, precise lines.",
    img: REAL_IMAGES.interior,
  },
  {
    title: "Exterior Painting",
    desc: "Boost your curb appeal and protect your home with professional exterior painting. We use weather-resistant coatings designed for longevity, ensuring your home looks beautiful and stays protected against the elements for years to come.",
    img: REAL_IMAGES.exterior,
  },
  {
    title: "Cabinet Refinishing",
    desc: "Give your kitchen or bathroom a stunning transformation with factory-grade cabinet refinishing. Our meticulous process includes thorough prep, premium primers, and durable topcoats that deliver a smooth, lasting finish.",
    img: REAL_IMAGES.commercial,
  },
  {
    title: "Wood Staining",
    desc: "Enhance the natural beauty of your decks, fences, and wood surfaces with professional staining. We select the right products for protection and aesthetics, bringing out rich tones and extending the life of your wood.",
    img: REAL_IMAGES.woodStaining,
  },
  {
    title: "Commercial Painting",
    desc: "Create a professional environment for your business with our commercial painting services. We work around your schedule to minimize disruption while delivering clean, durable finishes that make a lasting impression on clients and employees.",
    img: REAL_IMAGES.commercial,
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero - Black */}
      <section className="relative h-[40vh] min-h-[350px] flex items-end bg-black">
        <div className="container mx-auto px-6 pb-16">
          <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-2">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
          <p className="text-white/60 mt-3 max-w-[65ch]">
            A full range of residential and commercial painting services designed to enhance and protect your property.
          </p>
        </div>
      </section>

      {/* Services list - alternating */}
      {services.map((s, i) => (
        <section key={i} className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-black"}`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              style={i % 2 === 1 ? { direction: "rtl" } : undefined}
            >
              <div style={{ direction: "ltr" }}>
                <img src={s.img} alt={s.title} className="rounded-xl shadow-lg w-full h-80 object-cover" />
              </div>
              <div style={{ direction: "ltr" }}>
                <span className={`text-xs uppercase tracking-widest font-medium ${i % 2 === 0 ? "text-black/40" : "text-white/40"}`}>
                  Service {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className={`text-2xl md:text-3xl font-bold mt-2 ${i % 2 === 0 ? "text-black" : "text-white"}`}>{s.title}</h2>
                <p className={`mt-4 leading-relaxed max-w-[65ch] ${i % 2 === 0 ? "text-black/60" : "text-white/60"}`}>{s.desc}</p>
                <a
                  href="mailto:nick@carpinspainting.org"
                  className={`inline-flex items-center gap-2 mt-6 rounded-[8px] px-6 py-3 font-semibold text-sm hover:shadow-lg transition-all active:scale-95 ${
                    i % 2 === 0 ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  Request Your Estimate
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
