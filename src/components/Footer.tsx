import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Carpin's Painting</h3>
            <p className="text-sm leading-relaxed text-white/60">Professional residential & commercial painting services in Raleigh, NC and the Triangle area.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {[{ label: "Home", path: "/" }, { label: "About", path: "/about" }, { label: "Services", path: "/services" }, { label: "Our Works", path: "/our-works" }, { label: "Testimonials", path: "/testimonials" }].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <span>Interior Painting</span>
              <span>Exterior Painting</span>
              <span>Cabinet Refinishing</span>
              <span>Wood Staining</span>
              <span>Commercial Painting</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-medium mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="tel:9199969641" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={14} /> (919) 996-9641</a>
              <a href="mailto:nick@carpinspainting.org" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={14} /> nick@carpinspainting.org</a>
              <span className="flex items-center gap-2"><MapPin size={14} /> Raleigh, NC</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Carpin's Painting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
