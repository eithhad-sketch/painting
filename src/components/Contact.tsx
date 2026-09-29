import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { content } from '@/data/content';

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  details: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    details: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const reset = () => {
    setForm({ name: '', email: '', phone: '', city: '', service: '', details: '' });
    setStatus('idle');
  };

  const inputClass =
    'w-full bg-neutral-100 border border-neutral-200 rounded-xl px-4 py-3.5 text-ink-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all';

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-ink-900 tracking-tight">
              {content.contact.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              {content.contact.subtitle}
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${content.footer.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Call us</div>
                  <div className="font-bold text-ink-900">{content.footer.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${content.footer.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Email us</div>
                  <div className="font-bold text-ink-900">{content.footer.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Service area</div>
                  <div className="font-bold text-ink-900">{content.footer.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-neutral-50 rounded-3xl p-10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-ink-900">
                    {content.contact.form.success.title}
                  </h3>
                  <p className="mt-3 text-neutral-600 max-w-md mx-auto">
                    {content.contact.form.success.desc}
                  </p>
                  <button
                    onClick={reset}
                    className="mt-8 bg-ink-900 hover:bg-ink-800 text-white font-semibold px-6 py-3 rounded-full transition-all"
                  >
                    {content.contact.form.success.button}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-neutral-50 rounded-3xl p-8 lg:p-10 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink-900 mb-2">
                        {content.contact.form.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jean Francois"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-900 mb-2">
                        {content.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(514) 622-1599"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink-900 mb-2">
                        {content.contact.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jean@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-900 mb-2">
                        {content.contact.form.city}
                      </label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="Montreal"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                      {content.contact.form.serviceLabel}
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      required
                      className={inputClass}
                    >
                      <option value="" disabled>
                        {content.contact.form.servicePlaceholder}
                      </option>
                      {content.contact.services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                      {content.contact.form.details}
                    </label>
                    <textarea
                      rows={4}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      placeholder="Tell us about your project..."
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-primary hover:bg-primary-600 disabled:opacity-60 text-white font-bold py-4 rounded-full transition-all hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      content.contact.form.sending
                    ) : (
                      <>
                        {content.contact.form.submit}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
                    <Shield className="w-4 h-4" />
                    {content.contact.form.secure}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
