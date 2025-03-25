import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="inline-block mb-6">
              <span className="font-bold text-2xl text-gradient">PharmaFly</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Revolutionizing medicine delivery with AI-powered prescription analysis and 10-minute delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-aushadh-600 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Innovation Drive, Mumbai, Maharashtra, India 560001
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-aushadh-600 mr-3 flex-shrink-0" />
                <a href="mailto:info@aushadhai.com" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  Hariom@aushadhai.com
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-aushadh-600 mr-3 flex-shrink-0" />
                <a href="tel:+918001234567" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
                  +91 800 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PharmaFly by Hariom. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-aushadh-600 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
