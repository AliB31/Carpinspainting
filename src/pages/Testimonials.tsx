import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/FAQSection";

const Testimonials = () => {
  return (
    <div>
      {/* Hero - Black */}
      <section className="relative h-[40vh] min-h-[350px] flex items-end bg-black">
        <div className="container mx-auto px-6 pb-16">
          <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-2">Reviews</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Testimonials</h1>
          <p className="text-white/60 mt-3 max-w-[65ch]">
            Don't just take our word for it—hear from the homeowners who trust Carpin's Painting.
          </p>
        </div>
      </section>

      {/* Testimonials - White */}
      <TestimonialCarousel />

      {/* FAQ - Black */}
      <FAQSection />

      {/* CTA - White */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Ready to Join Our Happy Clients?</h2>
          <p className="text-black/60 mt-4 max-w-md mx-auto">Get a free, no-obligation estimate for your next painting project.</p>
          <a href="mailto:nick@carpinspainting.org" className="inline-flex items-center gap-2 mt-8 rounded-[8px] bg-black text-white px-8 py-3.5 font-semibold text-sm hover:shadow-lg transition-all active:scale-95">
            Request Your Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
