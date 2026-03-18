import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Paintbrush } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import interiorImg from "@/assets/interior-painting.jpg";
import exteriorImg from "@/assets/exterior-painting.jpg";
import cabinetImg from "@/assets/cabinet-refinishing.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/FAQSection";

const pillars = [
  { icon: Shield, num: "01", title: "Fully Insured & Licensed", desc: "Complete protection and peace of mind for every project we take on." },
  { icon: Clock, num: "02", title: "Dependable Timelines", desc: "We show up on time, communicate clearly, and finish when we say we will." },
  { icon: Paintbrush, num: "03", title: "Premium Materials", desc: "We use top-tier paints and coatings for results that last for years." },
];

const services = [
  { title: "Interior Painting", desc: "Surface prep, minor drywall repair, and premium finishes.", img: interiorImg },
  { title: "Exterior Painting", desc: "Weather-resistant coatings designed for longevity.", img: exteriorImg },
  { title: "Cabinet Refinishing", desc: "Factory-grade finishes for kitchen and bath transformations.", img: cabinetImg },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <img src={heroImage} alt="Professional painting by Carpin's Painting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-background leading-[1.1] max-w-2xl">
              Professional Painting for Spaces That Matter
            </h1>
            <p className="text-background/70 mt-5 max-w-lg text-lg leading-relaxed">
              Nick and the Carpin's team provide meticulous interior and exterior finishing with transparent pricing and dependable timelines.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="mailto:nick@carpinspainting.org"
                className="inline-flex items-center gap-2 rounded-[8px] bg-accent text-accent-foreground px-6 py-3 font-semibold text-sm hover:shadow-lg transition-all active:scale-95"
              >
                Request Your Estimate
              </a>
              <Link
                to="/our-works"
                className="inline-flex items-center gap-2 rounded-[8px] bg-background/10 text-background border border-background/20 px-6 py-3 font-semibold text-sm hover:bg-background/20 transition-all"
              >
                See Our Work <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <span className="text-xs text-muted-foreground font-mono mt-1">No. {p.num}</span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <p className="section-overline mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl mx-auto">
            Carpin's Painting
          </h2>
          <p className="text-muted-foreground mt-4 prose-limit mx-auto leading-relaxed">
            Carpin's Painting is proud to bring top-tier painting services to families and businesses across the Raleigh area. We offer a full range of residential and commercial painting services designed to enhance and protect homes and businesses across Raleigh and the Triangle area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[gallery1, gallery2, gallery3].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Carpin's Painting work ${i + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl w-full h-64 object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-overline mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Do</h2>
          <p className="text-muted-foreground mt-3 prose-limit">
            Discover premium painting services and trusted guidance for your home or business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden shadow-stack bg-card"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <p className="section-overline mb-3">Service Areas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Proudly Serving Raleigh & Beyond
          </h2>
          <p className="text-muted-foreground mt-3 prose-limit mx-auto">
            Carpin's Painting is honored to be your trusted local painter across the Triangle area.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["Raleigh", "Cary", "Apex", "Holly Springs", "Fuquay Varina", "Clayton", "Morrisville", "Angier", "Burlington", "Mebane", "Durham", "Chapel Hill"].map(
              (area) => (
                <span key={area} className="px-4 py-2 rounded-[8px] bg-card shadow-stack text-sm font-medium text-foreground">
                  {area}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="py-24 bg-foreground text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-background">
            Ready to Transform Your Space?
          </h2>
          <p className="text-background/60 mt-4 max-w-md mx-auto">
            Get a free, no-obligation estimate for your next painting project.
          </p>
          <a
            href="mailto:nick@carpinspainting.org"
            className="inline-flex items-center gap-2 mt-8 rounded-[8px] bg-accent text-accent-foreground px-8 py-3.5 font-semibold text-sm hover:shadow-lg transition-all active:scale-95"
          >
            Request Your Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
