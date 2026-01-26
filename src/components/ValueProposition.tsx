import { useEffect, useState, useRef } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Complete Resource Library',
    description: 'SAT Black Book, The College Panda\'s Math Guide, official past papers, and more - everything you need in one place'
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Actual Past Papers',
    description: 'SAT-1 actual past papers to practice with real exam questions and understand the test format'
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'One-Time Payment - PKR 5,000',
    description: 'Affordable access to premium SAT resources. No subscriptions, no hidden fees - pay once and get lifetime access'
  }
];

export default function ValueProposition() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-frosted-mint/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauve-shadow mb-4">
            Why Choose Our SAT Resource Kit?
          </h2>
          <p className="text-lg sm:text-xl text-jungle-teal max-w-3xl mx-auto">
            Everything you need to ace the Digital SAT - curated resources trusted by top scorers
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-frosted-mint text-jungle-teal w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                {benefit.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-mauve-shadow mb-4 text-center md:text-left">
                {benefit.title}
              </h3>
              <p className="text-jungle-teal text-base sm:text-lg leading-relaxed text-center md:text-left font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Urgency banner */}
        <div className="mt-12 bg-gradient-to-r from-powder-petal to-powder-petal/80 rounded-2xl p-6 md:p-8 text-center shadow-xl">
          <p className="text-mauve-shadow text-xl sm:text-2xl font-bold mb-2">
            🔥 Only 5 Spots Available This Batch
          </p>
          <p className="text-mauve-shadow/80 text-base sm:text-lg">
            Limited access to ensure quality - Secure your copy now!
          </p>
        </div>
      </div>
    </section>
  );
}

