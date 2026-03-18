import { motion } from "framer-motion";
import aboutImg from "@/assets/about-nick.jpg";
import { REAL_IMAGES } from "@/lib/images";

const About = () => {
  return (
    <div>
      {/* Hero - Black */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={REAL_IMAGES.hero} alt="About Carpin's Painting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16">
          <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-2">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Story</h1>
        </div>
      </section>

      {/* Content - White */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.img
              src={aboutImg}
              alt="Nick from Carpin's Painting at work"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl shadow-lg w-full h-[500px] object-cover"
            />
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-widest text-black/40 font-medium mb-3">The Founder</p>
              <h2 className="text-3xl font-bold text-black mb-6">Meet Nick</h2>
              <div className="space-y-4 text-black/60 leading-relaxed max-w-[65ch]">
                <p>Nick founded Carpin's Painting with a simple mission: deliver exceptional craftsmanship with honesty and professionalism. With years of experience in residential and commercial painting, Nick has built a reputation for meticulous attention to detail and dependable service.</p>
                <p>Every project begins with a thorough consultation, transparent pricing, and a clear timeline. Nick personally oversees each job, ensuring the highest standards of quality from prep to final coat.</p>
                <p>Carpin's Painting is proud to bring top-tier painting services to families and businesses across the Raleigh area. We travel to neighborhoods where quality, craftsmanship, and care are appreciated. We're honored to be your trusted local painter.</p>
              </div>
              <a href="mailto:nick@carpinspainting.org" className="inline-flex items-center gap-2 mt-8 rounded-[8px] bg-black text-white px-6 py-3 font-semibold text-sm hover:shadow-lg transition-all active:scale-95">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Black */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality Craftsmanship", desc: "Two coats of premium paint, meticulous surface preparation, and clean, precise lines on every project." },
              { title: "Transparent Pricing", desc: "No hidden fees. We provide detailed, honest estimates and keep you informed throughout the process." },
              { title: "Dependable Service", desc: "We show up on time, communicate clearly, and treat your home with the respect it deserves." },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
