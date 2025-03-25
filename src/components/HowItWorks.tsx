
import React from 'react';
import { Upload, Search, ShoppingBag, Truck } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-white" />,
    title: 'Upload Prescription',
    description: 'Take a photo of your prescription or upload an existing image.',
    color: 'from-aushadh-400 to-aushadh-600',
    number: '01'
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: 'AI Analysis',
    description: 'Our AI instantly decodes your prescription and identifies medicines with 99.7% accuracy.',
    color: 'from-aushadh-500 to-aushadh-700',
    number: '02'
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-white" />,
    title: 'Confirm & Pay',
    description: 'Review the details, select your preferred payment method, and confirm your order.',
    color: 'from-aushadh-600 to-aushadh-800',
    number: '03'
  },
  {
    icon: <Truck className="h-8 w-8 text-white" />,
    title: 'Fast Delivery',
    description: 'Receive your medicines at your doorstep in just 10 minutes.',
    color: 'from-aushadh-700 to-aushadh-900',
    number: '04'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
          <span className="text-sm font-medium px-4 py-2 bg-aushadh-100 text-aushadh-800 rounded-full inline-block mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How AushadhAI Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple 4-step process that takes your prescription from upload to delivery in minutes, not days.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative mb-8">
                <div className={`
                  w-20 h-20 rounded-2xl flex items-center justify-center 
                  bg-gradient-to-br ${step.color} shadow-lg pill-glow
                  transform transition-all duration-500 group-hover:scale-110
                `}>
                  {step.icon}
                </div>
                <span className="absolute -top-3 -right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-aushadh-200">
                  {step.number}
                </span>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-aushadh-200 to-transparent -z-10"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-aushadh-50 to-aushadh-100/50 border border-aushadh-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">See How It Works</h3>
              <p className="text-muted-foreground mb-4">
                Watch our demo video to see how easy it is to get your medicines delivered in minutes with AushadhAI.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-aushadh-500 rounded-full w-2 h-2 mr-3"></div>
                  <span>Upload any prescription in seconds</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-aushadh-500 rounded-full w-2 h-2 mr-3"></div>
                  <span>Secure AI analysis with 99.7% accuracy</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-aushadh-500 rounded-full w-2 h-2 mr-3"></div>
                  <span>Track your delivery in real-time</span>
                </li>
              </ul>
            </div>
            
            <div className="perspective-container">
              <div className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-aushadh-900/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-aushadh-500 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:bg-aushadh-600 hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <img 
                  src="https://placehold.co/800x450/0ea5e9/ffffff?text=Video+Demo" 
                  alt="AushadhAI Demo Video" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
