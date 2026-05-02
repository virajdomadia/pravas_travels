import { whatsappURL } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 animate-slide-down">
          Your journey starts here
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
          Let&apos;s plan your next journey
        </h2>
        <p className="text-gray-300 mb-10 text-base leading-relaxed max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Tell us where you want to go. Your dedicated travel expert responds within 2 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={whatsappURL("Hi Pravaas! I'd like to start planning my trip.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-semibold px-10 py-4 rounded-full btn-animate hover-lift"
          >
            Enquire Now
          </a>
        </div>
        <p className="text-muted text-xs mt-6 animate-pulse-subtle">
          Limited seasonal availability — secure your dates early.
        </p>
      </div>
    </section>
  );
}
