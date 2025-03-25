
import React from 'react';
import { Shield, Lock, CreditCard } from 'lucide-react';

const logos = [
  { name: 'Apollo Pharmacy', logo: 'https://placehold.co/160x60/f8fafc/64748b?text=Apollo+Pharmacy' },
  { name: 'MedPlus', logo: 'https://placehold.co/160x60/f8fafc/64748b?text=MedPlus' },
  { name: 'Wellness Forever', logo: 'https://placehold.co/160x60/f8fafc/64748b?text=Wellness+Forever' },
  { name: 'Netmeds', logo: 'https://placehold.co/160x60/f8fafc/64748b?text=Netmeds' },
  { name: 'PharmEasy', logo: 'https://placehold.co/160x60/f8fafc/64748b?text=PharmEasy' }
];

const TrustSection = () => {
  return (
    <section className="py-16 px-6 bg-aushadh-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Pharmacy Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with top-rated, licensed pharmacies to ensure you receive authentic medicines on time.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <img src={logo.logo} alt={logo.name} className="h-12" />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="bg-aushadh-100 p-3 rounded-full mb-4">
              <Shield className="h-6 w-6 text-aushadh-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Safe & Authentic</h3>
            <p className="text-muted-foreground">
              All medicines are sourced from licensed pharmacies and undergo strict quality checks.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="bg-aushadh-100 p-3 rounded-full mb-4">
              <Lock className="h-6 w-6 text-aushadh-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Data</h3>
            <p className="text-muted-foreground">
              Your medical and personal information is encrypted and never shared with third parties.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="bg-aushadh-100 p-3 rounded-full mb-4">
              <CreditCard className="h-6 w-6 text-aushadh-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">
              Multiple payment options with end-to-end encryption for all transactions.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium">All transactions secured with 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
