import { motion } from 'framer-motion';
import { ClipboardList, FileText, CheckCircle2 } from 'lucide-react';
import { content } from '@/data/content';

const icons = [ClipboardList, FileText, CheckCircle2];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-ink-900 tracking-tight">
            {content.process.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">{content.process.subtitle}</p>
        </motion.div>

        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-12">
            {content.process.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                    <Icon className="w-9 h-9 text-primary" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-ink-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed max-w-sm mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
