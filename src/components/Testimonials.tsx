import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "PharmaFly has been a game-changer for me. I no longer need to make trips to the pharmacy or worry about missing doses. The app is incredibly easy to use, and the delivery is lightning fast!",
    author: "Priya Sharma",
    title: "Chronic Care Patient",
    rating: 5,
    image: "https://placehold.co/100/0ea5e9/ffffff?text=PS"
  },
  {
    quote: "As a busy professional, I don't have time to wait in pharmacy lines. PharmaFly delivers my medications in minutes, and their prescription analysis has caught potential drug interactions that my doctor missed.",
    author: "Rahul Verma",
    title: "Software Engineer",
    rating: 5,
    image: "https://placehold.co/100/0ea5e9/ffffff?text=RV"
  },
  {
    quote: "I was skeptical about AI reading my prescriptions, but PharmaFly's technology is flawless. It accurately read my doctor's handwriting (which even I struggle with!) and delivered the right medications every time.",
    author: "Dr. Anand Patel",
    title: "Medical Professional",
    rating: 5,
    image: "https://placehold.co/100/0ea5e9/ffffff?text=AP"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
          <span className="text-sm font-medium px-4 py-2 bg-aushadh-100 text-aushadh-800 rounded-full inline-block mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers are saying about PharmaFly's revolutionary medicine delivery service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-aushadh-500 to-aushadh-700 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-white/80">Prescriptions Analyzed</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold mb-2">99.7%</div>
              <div className="text-white/80">Analysis Accuracy</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold mb-2">10 mins</div>
              <div className="text-white/80">Average Delivery Time</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
