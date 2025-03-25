
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '₹50',
    description: 'Per delivery, no subscription needed',
    features: [
      '10-minute delivery',
      'AI prescription analysis',
      'Secure checkout',
      'Order tracking',
      'Chat support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Premium',
    price: '₹499',
    description: 'Monthly subscription with unlimited deliveries',
    features: [
      'Unlimited free deliveries',
      'Priority processing',
      'Medicine reminders',
      '24/7 doctor consultations',
      'Family account (up to 4)',
      'Exclusive discounts'
    ],
    cta: 'Subscribe Now',
    popular: true
  },
  {
    name: 'Family',
    price: '₹899',
    description: 'Quarterly subscription for entire family',
    features: [
      'Everything in Premium',
      'Family account (up to 8)',
      'Health monitoring',
      'Scheduled deliveries',
      'Annual health check-up',
      'Premium customer support'
    ],
    cta: 'Choose Family Plan',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-spacing px-6 bg-gradient-to-b from-white to-aushadh-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
          <span className="text-sm font-medium px-4 py-2 bg-aushadh-100 text-aushadh-800 rounded-full inline-block mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`
                relative rounded-2xl p-8 transition-all duration-300
                ${tier.popular 
                  ? 'bg-gradient-to-br from-aushadh-500 to-aushadh-700 text-white shadow-xl shadow-aushadh-500/20 border-none scale-105 z-10' 
                  : 'glass-card'
                }
              `}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 rounded-full text-aushadh-600 text-sm font-semibold shadow-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : ''}`}>{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={`ml-2 ${tier.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {tier.description}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${tier.popular ? 'text-white' : 'text-aushadh-500'}`} />
                    <span className={tier.popular ? 'text-white/90' : ''}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 ${
                  tier.popular 
                    ? 'bg-white text-aushadh-700 hover:bg-white/90' 
                    : 'bg-aushadh-500 text-white hover:bg-aushadh-600'
                } rounded-xl transition-all duration-300 hover:shadow-lg`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-2">
            Need a custom plan for your organization?
          </p>
          <a href="#" className="text-aushadh-600 font-medium hover:text-aushadh-700 underline underline-offset-4">
            Contact our enterprise sales team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
