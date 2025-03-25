
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Clock, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-aushadh-50/30 to-aushadh-100/10 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-aushadh-300/10 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-aushadh-200/10 rounded-full blur-3xl -z-10 animate-float"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <span className="inline-block text-sm font-medium px-4 py-2 bg-aushadh-100 text-aushadh-800 rounded-full mb-6">
              From Prescription to Pill, Delivered in Minutes
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
              <span>Scan. Analyze.</span> <br />
              <span className="text-gradient">Get Medicines in 10 Minutes</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Upload your prescription and let our AI instantly analyze it. 
              We'll deliver your medicines to your doorstep in minutes, not days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className={`
                  bg-aushadh-600 hover:bg-aushadh-700 text-white rounded-full 
                  px-8 py-6 text-lg font-medium transition-all duration-300 
                  ${isHovered ? 'shadow-lg shadow-aushadh-500/20 translate-y-[-2px]' : ''}
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Prescription Now
              </Button>
              
              <Button 
                variant="outline" 
                className="rounded-full border-aushadh-200 hover:border-aushadh-300 
                          px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-aushadh-600 mr-2" />
                <span className="text-sm font-medium">10-minute delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-aushadh-600 mr-2" />
                <span className="text-sm font-medium">100% accurate analysis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-aushadh-600 mr-2" />
                <span className="text-sm font-medium">Secure & private</span>
              </div>
            </div>
          </div>
          
          <div className="perspective-container animate-fade-in">
            <div className="relative bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:rotate-y-5 hover:scale-[1.02]">
              <div className="rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://placehold.co/600x400/e0f2fe/0ea5e9?text=Prescription+Analysis" 
                  alt="AI Prescription Analysis"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="bg-aushadh-50 p-4 rounded-xl mb-4">
                <h3 className="font-semibold text-lg mb-2">Prescription Details</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Medicine</span>
                    <span className="font-medium">Sertraline 50mg</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Dosage</span>
                    <span className="font-medium">Once daily</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Quantity</span>
                    <span className="font-medium">30 tablets</span>
                  </li>
                </ul>
              </div>
              
              <Button className="w-full bg-aushadh-500 hover:bg-aushadh-600 py-6 rounded-xl">
                Order Now • ₹420
                <span className="ml-2 text-sm opacity-80">10 min delivery</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
