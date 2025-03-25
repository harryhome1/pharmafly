
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Upload, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

const CallToAction = () => {
  const [hover, setHover] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [address, setAddress] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast.success("Prescription uploaded successfully!");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      toast.success("Prescription uploaded successfully!");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    if (!file) {
      toast.error("Please upload a prescription first");
      return;
    }

    if (!address.trim()) {
      toast.error("Please enter your delivery address");
      return;
    }

    toast.success("Your prescription has been submitted. Medicines will be delivered in 10 minutes!");
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-aushadh-600 to-aushadh-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to experience the future of medicine delivery?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Join thousands of satisfied customers who save time and money with AushadhAI. 
              Upload your prescription now and get medicines delivered in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-aushadh-700 hover:bg-white/90 rounded-full 
                          px-8 py-6 text-lg font-medium transition-all duration-300"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
              
              <Button 
                variant="outline" 
                className="rounded-full border-white/20 bg-white/10 hover:bg-white/20 
                          px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center mt-8">
              <div className="flex -space-x-2 mr-4">
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-aushadh-700" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-aushadh-700" />
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-aushadh-700" />
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-aushadh-700" />
              </div>
              <div className="text-sm">
                Trusted by <span className="font-semibold">50,000+</span> customers
              </div>
            </div>
          </div>
          
          <div className="perspective-container">
            <div className="relative bg-aushadh-700/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="absolute -top-6 -right-6">
                <div className="bg-aushadh-50 text-aushadh-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  10-minute delivery!
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-2">Get Started Now</h3>
                <p className="text-white/70">Upload your prescription and get medicines delivered in minutes.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-4 mb-6">
                <label className="block text-sm font-medium mb-2">Upload Prescription</label>
                <div 
                  className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-white/40 transition-colors"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => document.getElementById('prescription-upload')?.click()}
                >
                  <Upload className="h-8 w-8 mx-auto mb-2 text-white/60" />
                  <p className="text-sm text-white/60">
                    {file ? file.name : "Drag & drop your prescription here or browse files"}
                  </p>
                  <input 
                    id="prescription-upload" 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-4 mb-6">
                <label className="block text-sm font-medium mb-2">Delivery Address</label>
                <input 
                  type="text" 
                  placeholder="Enter your full address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              
              <Button 
                className="w-full bg-white text-aushadh-700 hover:bg-white/90 py-6 rounded-xl font-medium text-lg"
                onClick={handleSubmit}
              >
                Submit Prescription
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
