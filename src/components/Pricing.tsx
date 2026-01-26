import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';

const resourceKit = {
  name: 'Complete SAT Resource Kit',
  price: '5,000',
  originalPrice: '15,000',
  features: [
    '📚 SAT Black Book (Complete Guide)',
    '📘 The College Panda\'s SAT Math: Advanced Guide & Workbook',
    '📝 SAT-1 Actual Past Papers (Official)',
    '📖 Additional SAT Math Books & Resources',
    '🎯 Practice Questions & Answer Keys',
    '✅ Comprehensive Study Strategies',
    '💡 Test-Taking Tips & Techniques',
    '📊 Score Improvement Strategies',
    '🔄 Lifetime Digital Access',
    '⚡ Instant Download After Payment'
  ],
  benefits: [
    'Save PKR 10,000+ compared to buying separately',
    'Same resources used by 1400+ scorers',
    'No monthly subscriptions or hidden fees',
    'Access anytime, anywhere on any device'
  ]
};

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauve-shadow mb-4">
            Everything You Need in One Kit
          </h2>
          <p className="text-lg sm:text-xl text-jungle-teal max-w-3xl mx-auto mb-6">
            Premium SAT resources trusted by top scorers - at an unbeatable price
          </p>
          <div className="inline-flex items-center gap-2 bg-powder-petal text-mauve-shadow px-4 py-2 rounded-full font-bold text-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Limited Time Offer - 67% OFF!
          </div>
        </div>

        {/* Pricing card */}
        <div
          className={`relative bg-white rounded-3xl shadow-2xl ring-4 ring-muted-teal transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Popular badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-powder-petal text-mauve-shadow px-6 py-2 rounded-full text-base font-bold shadow-lg">
              ⭐ Best Value for Money
            </span>
          </div>

          <div className="p-8 md:p-12">
            {/* Plan name */}
            <h3 className="text-3xl sm:text-4xl font-bold text-mauve-shadow mb-4 text-center">
              {resourceKit.name}
            </h3>
            <p className="text-jungle-teal text-center mb-8 text-lg">All essential SAT resources in digital format</p>

            {/* Price */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-jungle-teal line-through opacity-60">
                  PKR {resourceKit.originalPrice}
                </span>
                <span className="bg-powder-petal text-mauve-shadow px-3 py-1 rounded-full text-sm font-bold">
                  SAVE 67%
                </span>
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-lg text-jungle-teal">Only</span>
                <span className="text-6xl sm:text-7xl font-bold text-muted-teal">
                  {resourceKit.price}
                </span>
                <span className="text-lg text-jungle-teal">PKR</span>
              </div>
              <p className="text-base text-jungle-teal/70 mt-2">One-time payment • Lifetime access</p>
            </div>

            {/* CTA button */}
            <a
              href={`https://wa.me/923390107394?text=Hi%2C%20I%20am%20interested%20in%20the%20SAT%20Resource%20Kit%20for%20PKR%20${resourceKit.price}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-10"
            >
              <Button
                className="w-full font-bold text-xl py-8 rounded-xl transition-all duration-300 hover:scale-105 min-h-[64px] bg-powder-petal hover:bg-powder-petal/90 text-mauve-shadow shadow-2xl"
              >
                Buy Now - Get Instant Access
              </Button>
            </a>

            {/* What's Included */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-mauve-shadow mb-6 text-center">📦 What's Included:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {resourceKit.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-frosted-mint/30 p-4 rounded-xl">
                    <svg className="w-6 h-6 text-muted-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-jungle-teal text-base font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="border-t border-muted-teal/20 pt-8">
              <h4 className="text-xl font-bold text-mauve-shadow mb-4 text-center">💎 Why This Kit?</h4>
              <div className="space-y-3">
                {resourceKit.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-powder-petal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-jungle-teal text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="mt-12 bg-gradient-to-r from-frosted-mint/50 to-powder-petal/30 rounded-2xl p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-12 h-12 text-muted-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-2xl sm:text-3xl font-bold text-mauve-shadow">
              100% Satisfaction Guarantee
            </h3>
          </div>
          <p className="text-lg text-jungle-teal max-w-3xl mx-auto">
            If you're not satisfied with the quality of resources, we'll refund your payment within 7 days. No questions asked!
          </p>
        </div>

        {/* Payment info */}
        <div className="mt-8 text-center">
          <p className="text-jungle-teal text-sm sm:text-base">
            💳 Easy bank transfer or JazzCash • 🔒 Secure payment • ⚡ Instant delivery after payment confirmation
          </p>
        </div>
      </div>
    </section>
  );
}

