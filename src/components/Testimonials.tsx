import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { content } from '@/data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-ink-900 tracking-tight">
            {content.testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">{content.testimonials.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {content.testimonials.items.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-neutral-50 rounded-3xl p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-ink-800 leading-relaxed text-[15px]">"{testimonial.text}"</p>

              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-neutral-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-ink-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
