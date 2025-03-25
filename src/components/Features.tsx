
import React from 'react';
import { Clock, Shield, Zap, Pill, CreditCard, MessageSquare } from 'lucide-react';

const featureData = [
  {
    icon: <Pill className="h-8 w-8 text-aushadh-600" />,
    title: 'AI Prescription Analysis',
    description: 'Our advanced AI accurately reads and analyzes your prescription in seconds, ensuring you get the right medicines every time.',
    image: 'https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg'
  },
  {
    icon: <Clock className="h-8 w-8 text-aushadh-600" />,
    title: '10-Minute Delivery',
    description: 'We partner with local pharmacies to deliver your medicines in just 10 minutes. No more waiting or driving to the pharmacy.',
    image: 'https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1236.jpg'
  },
  {
    icon: <Shield className="h-8 w-8 text-aushadh-600" />,
    title: 'Safe & Secure',
    description: 'Your prescription data is encrypted and secure. We prioritize your privacy and only use your information to fulfill your orders.',
    image: 'https://img.freepik.com/free-photo/cybersecurity-data-protection-information-privacy-concept_53876-125127.jpg'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-aushadh-600" />,
    title: 'Competitive Pricing',
    description: 'We offer discounted prices compared to local pharmacies, saving you money on every order without compromising on quality.',
    image: 'https://img.freepik.com/free-photo/person-using-credit-card-online-payment-shopping_53876-146387.jpg'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-aushadh-600" />,
    title: 'Telemedicine Support',
    description: 'Connect with licensed doctors instantly for prescriptions, consultations, and medical advice from the comfort of your home.',
    image: 'https://img.freepik.com/free-photo/close-up-doctor-with-tablet_23-2149056313.jpg'
  },
  {
    icon: <Zap className="h-8 w-8 text-aushadh-600" />,
    title: 'Subscription Refills',
    description: 'Set up automatic refills for your regular medications and never worry about running out of essential medicines again.',
    image: 'https://img.freepik.com/free-photo/doctor-holding-stethoscope-phone-with-medical-technology-digital-business_53876-121132.jpg'
  }
];

const Features = () => {
  return (
    <section id="features" className="section-spacing px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
          <span className="text-sm font-medium px-4 py-2 bg-aushadh-100 text-aushadh-800 rounded-full inline-block mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Revolutionizing Medicine Delivery
          </h2>
          <p className="text-lg text-muted-foreground">
            AushadhAI combines cutting-edge technology with rapid delivery to ensure you get the medicines you need, when you need them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="bg-aushadh-100 rounded-full p-3 inline-flex mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
