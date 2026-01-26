




import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-jungle-teal via-muted-teal to-frosted-mint">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-0 left-0 w-96 h-96 bg-powder-petal rounded-full mix-blend-multiply filter blur-3xl ${mounted ? 'animate-blob' : ''}`}></div>
        <div className={`absolute top-0 right-0 w-96 h-96 bg-frosted-mint rounded-full mix-blend-multiply filter blur-3xl ${mounted ? 'animate-blob animation-delay-2000' : ''}`}></div>
        <div className={`absolute bottom-0 left-1/2 w-96 h-96 bg-muted-teal rounded-full mix-blend-multiply filter blur-3xl ${mounted ? 'animate-blob animation-delay-4000' : ''}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Master the Digital SAT &<br />
            <span className="text-powder-petal italic">Unlock Top Global Universities</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-frosted-mint mb-4 max-w-4xl mx-auto leading-relaxed">
            Structured 12-Week Program • 1400+ Score Guarantee
          </p>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Complete SAT Resource Kit: Past Papers, SAT Black Book, The College Panda's Math Guide & More - Just PKR 5,000!
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <a
              href="https://wa.me/923390107394?text=Hi%2C%20I%20am%20interested%20in%20the%20SAT%20Resource%20Kit%20for%20PKR%205%2C000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full bg-powder-petal hover:bg-powder-petal/90 text-mauve-shadow font-bold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-powder-petal/50 min-h-[56px]"
              >
                Get Complete Resource Kit - PKR 5,000
              </Button>
            </a>
            <a
              href="#testimonials"
              className="text-white text-lg sm:text-xl underline underline-offset-4 hover:text-powder-petal transition-colors duration-300 min-h-[56px] flex items-center"
            >
              See Success Stories →
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/90 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-powder-petal" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="font-semibold">500+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">100% Refund Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}










