



import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown end date (3 days from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    endDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-jungle-teal via-muted-teal to-frosted-mint relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/20">
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your SAT Journey Today
          </h2>
          <p className="text-xl sm:text-2xl text-frosted-mint mb-8">
            Get instant access to premium resources for just PKR 5,000
          </p>

          {/* Benefits list */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-powder-petal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/90 text-base sm:text-lg">Complete digital resource library</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-powder-petal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/90 text-base sm:text-lg">Actual SAT past papers</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-powder-petal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/90 text-base sm:text-lg">Trusted by 1400+ scorers</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-powder-petal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/90 text-base sm:text-lg">Lifetime access, one-time payment</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://wa.me/923390107394?text=Hi%2C%20I%20am%20interested%20in%20the%20SAT%20Resource%20Kit%20for%20PKR%205%2C000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full bg-powder-petal hover:bg-powder-petal/90 text-mauve-shadow font-bold text-xl px-10 sm:px-16 py-6 sm:py-8 rounded-lg shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-powder-petal/50 min-h-[56px]"
              >
                Buy Now for PKR 5,000 - Instant Access
              </Button>
            </a>
            <p className="text-frosted-mint text-sm sm:text-base">
              Instant delivery • Lifetime access • 7-day money-back guarantee
            </p>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-6 sm:gap-10 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-powder-petal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">500+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-powder-petal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-powder-petal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







