import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { content } from '@/data/content';
import { aboutImage, aboutImage2 } from '@/data/media';

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Professional painter at work"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-50 hidden sm:block">
              <img
                src={aboutImage2}
                alt="Painter working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-black">15+</div>
              <div className="text-sm font-medium text-white/90">Years Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-ink-900 tracking-tight">
              {content.about.title}
            </h2>
            <p className="mt-4 text-xl text-primary font-semibold">{content.about.subtitle}</p>
            <p className="mt-6 text-neutral-600 leading-relaxed">{content.about.desc}</p>

            <ul className="mt-8 space-y-4">
              {content.about.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-ink-800 font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-8 text-lg text-ink-800 font-medium italic border-l-4 border-primary pl-4">
              {content.about.goal}
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-ink-900 hover:bg-ink-800 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl"
            >
              {content.about.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
