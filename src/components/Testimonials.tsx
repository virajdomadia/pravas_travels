import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 bg-surface" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Real travelers
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
            What couples say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col hover-lift hover-glow stagger-item animate-slide-up"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5 group/stars hover:animate-pulse-subtle">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold transition-transform group-hover/stars:animate-float" style={{ animationDelay: `${i * 0.1}s` }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate text-sm leading-relaxed italic flex-grow mb-6">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-gold">{t.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
