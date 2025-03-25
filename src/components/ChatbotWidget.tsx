import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm PharmaFly's assistant. How can I help you today?", 
      isBot: true 
    }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: userInput, isBot: false }]);
    setUserInput('');
    
    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      let botResponse;
      const userInputLower = userInput.toLowerCase();
      
      if (userInputLower.includes('delivery')) {
        botResponse = "We deliver medicines in just 10 minutes in most areas. You can track your delivery in real-time once your order is confirmed.";
      } else if (userInputLower.includes('price') || userInputLower.includes('cost')) {
        botResponse = "We offer competitive pricing on all medicines. You can check the exact price after uploading your prescription.";
      } else if (userInputLower.includes('secure') || userInputLower.includes('privacy')) {
        botResponse = "Your data is 100% secure. We use bank-grade encryption and never share your medical information with third parties.";
      } else if (userInputLower.includes('doctor') || userInputLower.includes('consultation')) {
        botResponse = "Yes, we offer telemedicine services. You can consult with a licensed doctor directly through our app.";
      } else {
        botResponse = "Thanks for your message. If you have any specific questions about our services, prescriptions, or deliveries, I'm happy to help!";
      }
      
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const commonQuestions = [
    "How fast is delivery?",
    "Is my data secure?",
    "Can I consult a doctor?",
    "What payment methods do you accept?"
  ];

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          fixed bottom-6 right-6 z-40 bg-aushadh-600 text-white rounded-full 
          w-14 h-14 flex items-center justify-center shadow-lg
          transition-all duration-300 hover:bg-aushadh-700 hover:scale-110
        `}
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
      
      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-sm z-50 animate-scale-in">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[500px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-aushadh-600 to-aushadh-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <MessageSquare className="h-4 w-4 text-aushadh-600" />
                </div>
                <div>
                  <h3 className="font-semibold">PharmaFly Assistant</h3>
                  <p className="text-xs text-white/80">Online | Typically replies in 1 min</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div 
                      className={`
                        max-w-[80%] rounded-2xl px-4 py-3 
                        ${message.isBot 
                          ? 'bg-white border border-gray-100 shadow-sm text-gray-800' 
                          : 'bg-aushadh-600 text-white'
                        }
                      `}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Suggested Questions */}
            <div className="px-4 py-2 bg-white border-t border-gray-100">
              <p className="text-xs text-muted-foreground mb-2">Common questions:</p>
              <div className="flex flex-wrap gap-2">
                {commonQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors"
                    onClick={() => {
                      setUserInput(question);
                      setMessages([...messages, { text: question, isBot: false }]);
                      
                      setTimeout(() => {
                        let response;
                        if (question === "How fast is delivery?") {
                          response = "We deliver medicines in just 10 minutes in most areas. You can track your delivery in real-time once your order is confirmed.";
                        } else if (question === "Is my data secure?") {
                          response = "Yes, absolutely! We use bank-grade encryption to protect your data and never share your medical information with third parties.";
                        } else if (question === "Can I consult a doctor?") {
                          response = "Yes, we offer telemedicine services. You can consult with a licensed doctor directly through our app for a nominal fee.";
                        } else if (question === "What payment methods do you accept?") {
                          response = "We accept all major credit/debit cards, UPI, net banking, and digital wallets. You can also choose cash on delivery in most areas.";
                        }
                        
                        setMessages(prev => [...prev, { text: response, isBot: true }]);
                      }, 1000);
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-200 rounded-l-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-aushadh-500 focus:border-transparent"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Button 
                  className="bg-aushadh-600 hover:bg-aushadh-700 text-white rounded-r-xl px-4"
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
