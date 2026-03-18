import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/FAQSection";

const Testimonials = () => {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[350px] flex items-end bg-foreground">
        <div className="container mx-auto px-6 pb-16">
          <p className="section-overline text-background/40 mb-2">Reviews</p>
          <h1 className="text-4xl md:text-5xl font-bold text-background">Testimonials</h1>
          <p className="text-background/60 mt-3 prose-limit">
            Don't just take our word for it—hear from the homeowners who trust Carpin's Painting.
          </p>
        </div>
      </section>

      <TestimonialCarousel />
      <FAQSection />

      <section className="py-24 bg-foreground text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-background">
            Ready to Join Our Happy Clients?
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

export default Testimonials;
