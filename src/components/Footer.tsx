import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { content } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-white text-lg">
                P
              </div>
              <span className="font-bold text-xl">
                Prestige <span className="text-primary">Painting</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
              {content.footer.desc}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: content.nav.services, href: '#services' },
                { label: content.nav.process, href: '#process' },
                { label: content.nav.work, href: '#transformation' },
                { label: content.nav.testimonials, href: '#testimonials' },
                { label: content.nav.faq, href: '#faq' },
                { label: content.nav.getQuote, href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{content.footer.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${content.footer.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {content.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.footer.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {content.footer.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                {content.footer.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} {content.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
