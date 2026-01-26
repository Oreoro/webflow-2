import { useState } from 'react';

const faqs = [
  {
    question: 'What resources are included in the kit?',
    answer: 'You get the SAT Black Book, The College Panda\'s SAT Math Guide & Workbook, SAT-1 actual past papers, additional math books, practice questions with answer keys, study strategies, test-taking tips, and more. Everything is delivered digitally for instant access.'
  },
  {
    question: 'How will I receive the resources?',
    answer: 'After payment confirmation, you\'ll receive a secure download link via WhatsApp and email. All resources are in digital format (PDF) for easy access on any device - computer, tablet, or smartphone.'
  },
  {
    question: 'Are these original/authentic resources?',
    answer: 'Yes! These are the exact same resources trusted by students who scored 1400+ on the SAT. The content is from well-known, reputable SAT prep publishers including College Board official materials.'
  },
  {
    question: 'Can I use these for the Digital SAT?',
    answer: 'Absolutely! While the format changed to digital, the content and question types remain the same. These resources are fully applicable to the current Digital SAT and will help you master all sections.'
  },
  {
    question: 'Is this a one-time payment?',
    answer: 'Yes! Pay just PKR 5,000 once and get lifetime access to all resources. No monthly subscriptions, no renewal fees, no hidden charges. Download and use whenever you need.'
  },
  {
    question: 'Why is it so affordable compared to buying separately?',
    answer: 'Buying these resources individually from bookstores or online would cost PKR 15,000+. We\'ve curated them into one digital bundle to make quality SAT prep accessible to all Pakistani students at an affordable price.'
  },
  {
    question: 'Can I share these with friends?',
    answer: 'The resources are for your personal use only. Sharing or distributing the materials violates copyright laws. Each student should purchase their own copy to support ethical education practices.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes! We offer a 7-day satisfaction guarantee. If you\'re not satisfied with the quality of resources, contact us within 7 days of purchase for a full refund. No questions asked.'
  },
  {
    question: 'How do I make payment?',
    answer: 'We accept bank transfers, JazzCash, and Easypaisa. After you message us on WhatsApp, we\'ll send you payment instructions. Once payment is confirmed, you\'ll get instant access to all resources.'
  },
  {
    question: 'Will this help me score 1400+?',
    answer: 'These are the exact resources used by students who achieved 1400+ scores. Combined with consistent practice and dedication, this kit provides everything you need to reach your target score. Results depend on your effort and study habits.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-frosted-mint/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mauve-shadow mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-jungle-teal">
            Everything you need to know about the SAT Resource Kit
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-muted-teal focus:ring-inset min-h-[56px]"
                aria-expanded={openIndex === index}
              >
                <span className="text-base sm:text-lg font-semibold text-mauve-shadow pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-muted-teal flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-jungle-teal text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-mauve-shadow mb-3">
            Still have questions?
          </h3>
          <p className="text-jungle-teal mb-6">
            Message us on WhatsApp and we'll respond within minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923390107394?text=Hi%2C%20I%20have%20a%20question%20about%20the%20SAT%20Resource%20Kit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted-teal hover:bg-jungle-teal text-white font-semibold rounded-lg transition-colors duration-300 min-h-[56px]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
