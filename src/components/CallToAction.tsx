
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Upload, ChevronRight, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const CallToAction = () => {
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
    <section className="py-24 px-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to experience the future of medicine delivery?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Join thousands of satisfied customers who save time and money with AushadhAI. 
              Upload your prescription now and get medicines delivered in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-indigo-700 hover:bg-white/90 rounded-full 
                          px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-900/20"
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
              <div className="flex -space-x-3 mr-4">
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-indigo-700 shadow-lg" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-indigo-700 shadow-lg" />
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-indigo-700 shadow-lg" />
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-indigo-700 shadow-lg" />
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-semibold border-2 border-indigo-700 shadow-lg">50k+</div>
              </div>
              <div className="text-sm">
                Trusted by <span className="font-semibold text-white">50,000+</span> customers
              </div>
            </div>
          </div>
          
          <div className="perspective-container">
            <Card className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl">
              <CardHeader className="pb-3 border-b border-white/10">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-900/20 flex items-center gap-1">
                    <Clock className="h-4 w-4" /> 10-minute delivery!
                  </div>
                </div>
                <CardTitle className="text-xl text-white">Get Started Now</CardTitle>
                <CardDescription className="text-white/70">
                  Upload your prescription and get medicines delivered in minutes.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6 space-y-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium mb-1">Upload Prescription</label>
                  <div 
                    className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-white/40 transition-colors group"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => document.getElementById('prescription-upload-cta')?.click()}
                  >
                    <div className="p-3 rounded-full bg-white/10 mb-3 inline-flex group-hover:bg-white/20 transition-all">
                      <Upload className="h-6 w-6 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                      {file ? file.name : "Drag & drop your prescription here or browse files"}
                    </p>
                    <input 
                      id="prescription-upload-cta" 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleFileUpload}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium mb-1">Delivery Address</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full address"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-white/10 pt-4">
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white py-6 rounded-xl font-medium text-lg shadow-lg shadow-indigo-900/30 transition-all duration-300"
                  onClick={handleSubmit}
                >
                  Submit Prescription
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
