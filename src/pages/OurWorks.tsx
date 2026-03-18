import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import interiorImg from "@/assets/interior-painting.jpg";
import exteriorImg from "@/assets/exterior-painting.jpg";
import cabinetImg from "@/assets/cabinet-refinishing.jpg";
import woodImg from "@/assets/wood-staining.jpg";
import commercialImg from "@/assets/commercial-painting.jpg";

const works = [
  { img: interiorImg, title: "Modern Living Room", category: "Interior" },
  { img: exteriorImg, title: "Craftsman Home Exterior", category: "Exterior" },
  { img: cabinetImg, title: "Kitchen Cabinet Refinish", category: "Cabinets" },
  { img: gallery1, title: "Residential Portfolio", category: "Exterior" },
  { img: gallery2, title: "Contemporary Facade", category: "Exterior" },
  { img: gallery3, title: "Accent Wall Bedroom", category: "Interior" },
  { img: woodImg, title: "Deck & Fence Staining", category: "Staining" },
  { img: commercialImg, title: "Commercial Space", category: "Commercial" },
];

const OurWorks = () => {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[350px] flex items-end bg-foreground">
        <div className="container mx-auto px-6 pb-16">
          <p className="section-overline text-background/40 mb-2">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-background">Our Works</h1>
          <p className="text-background/60 mt-3 prose-limit">
            Browse our gallery of completed projects across the Triangle area.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden shadow-stack bg-card"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={w.img}
                    alt={w.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="section-overline">{w.category}</span>
                  <h3 className="text-base font-semibold text-foreground mt-1">{w.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorks;
