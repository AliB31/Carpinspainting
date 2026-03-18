import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Paintbrush, Send } from "lucide-react";
import { REAL_IMAGES } from "@/lib/images";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/FAQSection";

const pillars = [
  { icon: Shield, num: "01", title: "Fully Insured & Licensed", desc: "Complete protection and peace of mind for every project we take on." },
  { icon: Clock, num: "02", title: "Dependable Timelines", desc: "We show up on time, communicate clearly, and finish when we say we will." },
  { icon: Paintbrush, num: "03", title: "Premium Materials", desc: "We use top-tier paints and coatings for results that last for years." },
];

const services = [
  { title: "Interior Painting", desc: "Surface prep, minor drywall repair, and premium finishes.", img: REAL_IMAGES.interior },
  { title: "Exterior Painting", desc: "Weather-resistant coatings designed for longevity.", img: REAL_IMAGES.exterior },
  { title: "Cabinet Refinishing", desc: "Factory-grade finishes for kitchen and bath transformations.", img: REAL_IMAGES.commercial },
];

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Estimate Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nick@carpinspainting.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <img src={REAL_IMAGES.hero} alt="Professional painting by Carpin's Painting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-20 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] max-w-2xl">
              Professional Painting for Spaces That Matter
            </h1>
            <p className="text-white/70 mt-5 max-w-lg text-lg leading-relaxed">
              Nick and the Carpin's team provide meticulous interior and exterior finishing with transparent pricing and dependable timelines.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="mailto:nick@carpinspainting.org" className="inline-flex items-center gap-2 rounded-[8px] bg-white text-black px-6 py-3 font-semibold text-sm hover:shadow-lg transition-all active:scale-95">
                Request Your Estimate
              </a>
              <Link to="/our-works" className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 text-white border border-white/20 px-6 py-3 font-semibold text-sm hover:bg-white/20 transition-all">
                See Our Work <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="flex gap-4">
                <span className="text-xs text-black/40 font-mono mt-1">No. {p.num}</span>
                <div>
                  <h3 className="text-lg font-semibold text-black">{p.title}</h3>
                  <p className="text-sm text-black/60 mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet - Black */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">Carpin's Painting</h2>
          <p className="text-white/60 mt-4 max-w-[65ch] mx-auto leading-relaxed">
            Carpin's Painting is proud to bring top-tier painting services to families and businesses across the Raleigh area. We offer a full range of residential and commercial painting services designed to enhance and protect homes and businesses across Raleigh and the Triangle area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[REAL_IMAGES.interior, REAL_IMAGES.exterior, REAL_IMAGES.woodStaining].map((img, i) => (
              <motion.img key={i} src={img} alt={`Carpin's Painting work ${i + 1}`} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="rounded-xl w-full h-64 object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Services - White */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-black/40 font-medium mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">What We Do</h2>
          <p className="text-black/60 mt-3 max-w-[65ch]">Discover premium painting services and trusted guidance for your home or business.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group rounded-xl overflow-hidden shadow-lg bg-white border border-black/5">
                <div className="h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black">{s.title}</h3>
                  <p className="text-sm text-black/60 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas - Black */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3">Service Areas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proudly Serving Raleigh & Beyond</h2>
          <p className="text-white/60 mt-3 max-w-[65ch] mx-auto">Carpin's Painting is honored to be your trusted local painter across the Triangle area.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["Raleigh", "Cary", "Apex", "Holly Springs", "Fuquay Varina", "Clayton", "Morrisville", "Angier", "Burlington", "Mebane", "Durham", "Chapel Hill"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-[8px] bg-white/10 border border-white/10 text-sm font-medium text-white">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - White */}
      <TestimonialCarousel />

      {/* FAQ - Black */}
      <FAQSection />

      {/* Contact Form - White */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-black/40 font-medium mb-3">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">Get Your Free Estimate</h2>
              <p className="text-black/60 mt-4 leading-relaxed max-w-[50ch]">
                Ready to transform your space? Fill out the form and Nick will get back to you with a detailed, no-obligation estimate.
              </p>
              <div className="mt-8 space-y-4 text-black/60 text-sm">
                <p><strong className="text-black">Phone:</strong> (919) 996-9641</p>
                <p><strong className="text-black">Email:</strong> nick@carpinspainting.org</p>
                <p><strong className="text-black">Location:</strong> Raleigh, NC</p>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-black mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-[8px] border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-[8px] border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1.5">Phone</label>
                  <input
                    type="tel"
                    maxLength={20}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-[8px] border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="(919) 555-0123"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1.5">Project Details</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-[8px] border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-[8px] bg-black text-white px-8 py-3.5 font-semibold text-sm hover:bg-black/90 hover:shadow-lg transition-all active:scale-95"
              >
                <Send size={16} /> Send Request
              </button>
              {submitted && (
                <p className="text-sm text-black/60 mt-2">Your email client should open with the details pre-filled. Thank you!</p>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA - Black */}
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Space?</h2>
          <p className="text-white/60 mt-4 max-w-md mx-auto">Get a free, no-obligation estimate for your next painting project.</p>
          <a href="mailto:nick@carpinspainting.org" className="inline-flex items-center gap-2 mt-8 rounded-[8px] bg-white text-black px-8 py-3.5 font-semibold text-sm hover:shadow-lg transition-all active:scale-95">
            Request Your Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
