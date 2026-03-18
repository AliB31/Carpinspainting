import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are you insured?",
    answer: "Yes! We are fully insured so you can feel protected during your project. We carry comprehensive liability insurance for your peace of mind.",
  },
  {
    question: "Are estimates free?",
    answer: "We provide free estimates on all of our services! Estimates may be done in person or virtually, whichever is most convenient for you.",
  },
  {
    question: "What kind of paints do you use?",
    answer: "We use premium paints chosen for their durability, appearance, and performance. We work with top brands like Sherwin-Williams and Benjamin Moore to ensure the best results.",
  },
  {
    question: "How many coats of paint do you apply?",
    answer: "We apply two coats of high-quality paint to ensure even coverage, rich color, and a long-lasting finish. Additional coats may be applied for dramatic color changes.",
  },
  {
    question: "Do you help with property financing?",
    answer: "While we don't directly offer financing, we provide transparent pricing and can work with you on project phasing to fit your budget.",
  },
  {
    question: "Can I schedule a site visit?",
    answer: "Absolutely! We encourage in-person consultations so we can provide the most accurate estimate and discuss your vision for the project. Contact us to schedule.",
  },
];

const transition = { duration: 0.3, ease: [0.4, 0, 0.2, 1] };

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="section-overline mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Frequently<br />Asked Questions
            </h2>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-foreground/5 ${
                  openIndex === index ? "ring-2 ring-primary/20 rounded-lg my-1 border-transparent" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between text-left py-5 px-2 group"
                >
                  <span className="text-base font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={transition}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={transition}
                      className="overflow-hidden"
                    >
                      <p className="px-2 pb-5 text-muted-foreground leading-relaxed prose-limit">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
