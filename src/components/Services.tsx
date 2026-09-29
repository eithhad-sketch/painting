import { motion } from 'framer-motion';
import { Paintbrush, Home, Brush, ArrowRight } from 'lucide-react';
import { content } from '@/data/content';
import { serviceImages } from '@/data/media';

const services = [
  {
    ...content.services.interior,
    image: serviceImages.interior,
    icon: Home,
  },
  {
    ...content.services.exterior,
    image: serviceImages.exterior,
    icon: Paintbrush,
  },
  {
    ...content.services.dye,
    image: serviceImages.dye,
    icon: Brush,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase">
            {content.services.socialProof}
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-ink-900 tracking-tight">
            {content.services.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">{content.services.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-ink-900">{service.title}</h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed">{service.desc}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Get a quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative bg-ink-900 rounded-3xl p-10 lg:p-16 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
              {content.services.cta.title}
            </h3>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              {content.services.cta.subtitle}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
            >
              {content.services.cta.button}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
