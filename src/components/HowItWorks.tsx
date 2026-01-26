import { useEffect, useState, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Message on WhatsApp',
    description: 'Send us a message expressing your interest in the SAT Resource Kit',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Make Payment',
    description: 'Simple one-time payment of PKR 5,000 - no subscriptions, no hidden fees',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Get Instant Access',
    description: 'Receive all resources digitally - SAT Black Book, College Panda\'s Math Guide, past papers, and more',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Start Studying',
    description: 'Begin your SAT prep journey with the most trusted and comprehensive resources available',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export default function HowItWorks() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauve-shadow mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-jungle-teal max-w-3xl mx-auto">
            Get your complete SAT resource kit in just 4 simple steps
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-frosted-mint via-muted-teal to-jungle-teal"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4 md:justify-end" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
                        <span className="text-5xl font-bold text-frosted-mint/60">{step.number}</span>
                        <div className="bg-frosted-mint text-jungle-teal p-3 rounded-xl">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-mauve-shadow mb-3">
                        {step.title}
                      </h3>
                      <p className="text-jungle-teal text-base sm:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-16 h-16 bg-muted-teal rounded-full flex items-center justify-center shadow-lg z-10">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl sm:text-2xl font-semibold text-mauve-shadow mb-6">
            Start your SAT prep journey today
          </p>
          <a
            href="https://wa.me/923390107394?text=Hi%2C%20I%20am%20interested%20in%20the%20SAT%20Resource%20Kit%20for%20PKR%205%2C000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-muted-teal hover:bg-jungle-teal text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 min-h-[56px] flex items-center justify-center"
          >
            Buy Resource Kit - PKR 5,000
          </a>
        </div>
      </div>
    </section>
  );
}

