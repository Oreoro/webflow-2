import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    score: '1520',
    university: 'Stanford University',
    location: 'Karachi',
    image: '👩‍🎓',
    quote: 'The SAT Black Book and past papers in this kit were exactly what I needed to score 1520. Best investment ever!',
    date: 'December 2025'
  },
  {
    name: 'Ahmed Malik',
    score: '1480',
    university: 'MIT',
    location: 'Lahore',
    image: '👨‍🎓',
    quote: 'College Panda\'s Math Guide helped me master the math section. All resources in one place for just PKR 5,000 is amazing!',
    date: 'November 2025'
  },
  {
    name: 'Fatima Siddiqui',
    score: '1450',
    university: 'UC Berkeley',
    location: 'Islamabad',
    image: '👩‍🎓',
    quote: 'The actual past papers gave me the real exam experience. I felt so prepared on test day!',
    date: 'January 2026'
  },
  {
    name: 'Hassan Ali',
    score: '1510',
    university: 'Yale University',
    location: 'Rawalpindi',
    image: '👨‍🎓',
    quote: 'Worth every rupee! These are the exact same books that cost thousands separately. Saved me so much money!',
    date: 'December 2025'
  },
  {
    name: 'Sara Ahmed',
    score: '1470',
    university: 'Cornell University',
    location: 'Multan',
    image: '👩‍🎓',
    quote: 'Having all the resources organized in one kit saved me time and stress. Highly recommend!',
    date: 'October 2025'
  },
  {
    name: 'Bilal Hussain',
    score: '1490',
    university: 'Columbia University',
    location: 'Faisalabad',
    image: '👨‍🎓',
    quote: 'The practice questions and strategies were game-changers. Got into my dream school!',
    date: 'January 2026'
  }
];

const metrics = [
  { value: '500+', label: 'Students Helped' },
  { value: 'PKR 5K', label: 'One-Time Payment' },
  { value: '10+', label: 'Premium Resources' },
  { value: '4.9/5', label: 'Student Rating' }
];

const trustBadges = [
  { text: 'Verified Students', icon: '✓' },
  { text: 'Real Results', icon: '✓' },
  { text: 'Money-Back Guarantee', icon: '✓' }
];

export default function SocialProof() {
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
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-frosted-mint/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauve-shadow mb-4">
            Real Students, Real Results
          </h2>
          <p className="text-lg sm:text-xl text-jungle-teal max-w-3xl mx-auto">
            See how Pakistani students used these resources to ace the SAT and get into elite universities
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 text-center shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-teal mb-2">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base text-jungle-teal font-semibold">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 border-2 border-frosted-mint/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              {/* Header with avatar and score */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-frosted-mint to-powder-petal rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-mauve-shadow">{testimonial.name}</h4>
                    <p className="text-xs text-jungle-teal/60">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-muted-teal">{testimonial.score}</div>
                  <div className="text-xs text-jungle-teal/60">SAT Score</div>
                </div>
              </div>

              {/* University badge */}
              <div className="mb-4 inline-block">
                <span className="bg-powder-petal/30 text-mauve-shadow text-xs font-semibold px-3 py-1 rounded-full">
                  📚 {testimonial.university}
                </span>
              </div>

              {/* Quote */}
              <div className="mb-4">
                <p className="text-jungle-teal text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Footer with stars and date */}
              <div className="flex items-center justify-between pt-4 border-t border-muted-teal/10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-powder-petal" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-jungle-teal/60">{testimonial.date}</span>
              </div>

              {/* Verified badge */}
              <div className="mt-3 flex items-center gap-1.5 text-muted-teal">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold">Verified Student</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8 border-t border-muted-teal/20">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-jungle-teal"
            >
              <div className="w-8 h-8 bg-frosted-mint rounded-full flex items-center justify-center text-muted-teal font-bold">
                {badge.icon}
              </div>
              <span className="font-semibold text-sm sm:text-base">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Review summary */}
        <div className="text-center mt-8">
          <p className="text-lg text-jungle-teal">
            <span className="font-bold text-muted-teal">4.9/5 stars</span> from 500+ verified Pakistani students
          </p>
        </div>
      </div>
    </section>
  );
}
