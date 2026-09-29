import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal, Instagram } from 'lucide-react';
import { content } from '@/data/content';
import { beforeAfterPairs } from '@/data/media';

function BeforeAfterSlider({
  before,
  after,
  title,
  desc,
}: {
  before: string;
  after: string;
  title: string;
  desc: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="before-after-slider relative rounded-2xl overflow-hidden cursor-ew-resize aspect-[3/2] shadow-lg"
        onMouseDown={(e) => {
          dragging.current = true;
          handleMove(e.clientX);
        }}
        onMouseMove={(e) => dragging.current && handleMove(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => handleMove(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-accent text-ink-900 text-xs font-bold px-3 py-1.5 rounded-full">
          {content.transformation.after}
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${containerRef.current?.clientWidth || 100}%` }}
          />
          <div className="absolute top-4 left-4 bg-ink-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {content.transformation.before}
          </div>
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <MoveHorizontal className="w-5 h-5 text-ink-900" />
          </div>
        </div>
      </div>
      <div className="mt-4 px-2">
        <h3 className="text-lg font-bold text-ink-900">{title}</h3>
        <p className="text-sm text-neutral-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default function Transformation() {
  return (
    <section id="transformation" className="py-24 lg:py-32 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            {content.transformation.title}
          </h2>
          <p className="mt-4 text-lg text-white/60">{content.transformation.subtitle}</p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent-400 font-medium text-sm transition-colors"
          >
            <Instagram className="w-4 h-4" />
            {content.transformation.viewOnIg}
          </a>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterPairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.15 }}
            >
              <BeforeAfterSlider {...pair} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-white/40 text-sm">
          Drag the slider to reveal the transformation
        </div>
      </div>
    </section>
  );
}
