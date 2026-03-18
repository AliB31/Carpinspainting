import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Our Works", path: "/our-works" },
  { label: "Testimonials", path: "/testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Carpin's Painting" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:nick@carpinspainting.org"
            className="inline-flex items-center justify-center rounded-[8px] bg-white text-black px-5 py-2.5 text-sm font-medium transition-all hover:bg-white/90 hover:shadow-lg hover:scale-[1.02] active:scale-95"
          >
            Get an Estimate
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-black border-b border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:nick@carpinspainting.org"
                className="inline-flex items-center justify-center rounded-[8px] bg-white text-black px-5 py-2.5 text-sm font-medium mt-2"
              >
                Get an Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
