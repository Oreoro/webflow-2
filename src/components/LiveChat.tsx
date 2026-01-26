import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1',
      text: 'Hi! 👋 How can I help you with the SAT Resource Kit today?', 
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      time: now
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setShowQuickReplies(false);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    setShowQuickReplies(false);
    
    const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply,
      sender: 'user',
      time: now
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return 'The Complete SAT Resource Kit is just PKR 5,000 (67% OFF from PKR 15,000)! You get lifetime digital access to all materials including SAT Black Book, College Panda Math Guide, actual past papers & more. Would you like to purchase? 💰';
    } else if (lowerMessage.includes('what') || lowerMessage.includes('include') || lowerMessage.includes('content')) {
      return 'The kit includes: SAT Black Book, College Panda\'s Math Guide, SAT-1 Actual Past Papers, additional math books, practice questions, study strategies, test-taking tips & more! Everything you need to ace the SAT! 📚';
    } else if (lowerMessage.includes('guarantee') || lowerMessage.includes('refund')) {
      return 'Yes! We offer a 7-day money-back guarantee. If you\'re not satisfied with the quality, we\'ll refund your payment - no questions asked! 100% risk-free! 🎯';
    } else if (lowerMessage.includes('how') || lowerMessage.includes('buy') || lowerMessage.includes('purchase')) {
      return 'Easy! Just click "Buy Now" and you\'ll be connected via WhatsApp. We accept bank transfer or JazzCash. Once payment is confirmed, you get instant digital access to all resources! ⚡';
    } else if (lowerMessage.includes('book') || lowerMessage.includes('call') || lowerMessage.includes('contact')) {
      return 'Great! Click the "Buy Now" button and send us a WhatsApp message. Our team will respond within minutes to help you get started! 📞';
    } else {
      return 'That\'s a great question! For instant help and to purchase the resource kit, click "Buy Now" to connect with us on WhatsApp. Our team is ready to assist you! 💬';
    }
  };

  const quickReplies = [
    'Pricing & Plans',
    'What\'s Included?',
    'Money-Back Guarantee',
    'How to Buy?'
  ];

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-muted-teal hover:bg-jungle-teal text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-muted-teal/50 group"
          aria-label="Open chat"
        >
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-powder-petal text-mauve-shadow text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
            1
          </span>

          {/* Chat icon */}
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>

          {/* Tooltip */}
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-mauve-shadow text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us!
          </span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-muted-teal to-jungle-teal text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-powder-petal text-mauve-shadow rounded-full flex items-center justify-center font-bold">
                  SAT
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-frosted-mint rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold">SAT Advisor</h3>
                <p className="text-xs text-frosted-mint">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-lg transition-colors duration-300"
              aria-label="Close chat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-frosted-mint/10">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-muted-teal text-white rounded-br-sm'
                      : 'bg-white text-mauve-shadow shadow-md rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-frosted-mint' : 'text-jungle-teal/60'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-mauve-shadow px-4 py-3 rounded-2xl rounded-bl-sm shadow-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-jungle-teal rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-jungle-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-jungle-teal rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {showQuickReplies && (
            <div className="px-4 py-2 bg-white border-t border-muted-teal/10">
              <p className="text-xs text-jungle-teal mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-frosted-mint hover:bg-muted-teal/20 text-mauve-shadow px-3 py-1.5 rounded-full transition-colors duration-300 border border-muted-teal/20"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-muted-teal/10 bg-white rounded-b-2xl">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-muted-teal/20 rounded-full focus:outline-none focus:ring-2 focus:ring-muted-teal text-mauve-shadow placeholder-jungle-teal/40 min-h-[48px]"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-muted-teal hover:bg-jungle-teal text-white p-3 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
