
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Clock, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

interface PrescriptionResult {
  medicine: string;
  dosage: string;
  quantity: string;
  instructions: string;
  price: number;
}

const PrescriptionAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [result, setResult] = useState<PrescriptionResult | null>(null);
  
  const form = useForm();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const processFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    setFile(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
    toast.success('Prescription uploaded successfully!');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const analyzePrescription = async () => {
    if (!file) {
      toast.error('Please upload a prescription first');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock analysis result
      const mockResult: PrescriptionResult = {
        medicine: 'Sertraline',
        dosage: '50mg',
        quantity: '30 tablets',
        instructions: 'Take one tablet by mouth once daily',
        price: 420
      };
      
      setResult(mockResult);
      toast.success('Prescription analyzed successfully!');
    } catch (error) {
      console.error('Error analyzing prescription:', error);
      toast.error('Failed to analyze prescription. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!result) {
      toast.error('Please analyze your prescription first');
      return;
    }

    if (!address.trim()) {
      toast.error('Please enter your delivery address');
      return;
    }

    toast.success(`Your order for ${result.medicine} has been placed! Delivery will arrive in 10 minutes.`);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-aushadh-600 to-aushadh-800 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Scan. Analyze.</span> <br />
            <span className="bg-white text-aushadh-700 px-2">Get Medicines in 10 Minutes</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Upload your prescription and let our AI instantly analyze it. 
            We'll deliver your medicines to your doorstep in minutes, not days.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Upload Prescription</h2>
            
            <div 
              className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-white/40 transition-colors min-h-[200px] flex flex-col items-center justify-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => document.getElementById('prescription-upload')?.click()}
            >
              {previewUrl ? (
                <div className="w-full">
                  <img 
                    src={previewUrl} 
                    alt="Prescription preview" 
                    className="max-h-[200px] mx-auto mb-3 rounded-lg"
                  />
                  <p className="text-sm text-white/60">{file?.name}</p>
                </div>
              ) : (
                <>
                  <Upload className="h-12 w-12 mb-4 text-white/60" />
                  <p className="text-white/80">
                    Drag & drop your prescription here or browse files
                  </p>
                </>
              )}
              <input 
                id="prescription-upload" 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            
            <Button 
              className="w-full mt-4 bg-white text-aushadh-700 hover:bg-white/90 py-6"
              onClick={analyzePrescription}
              disabled={!file || loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Prescription'
              )}
            </Button>
          </div>
          
          {/* Results Section */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Prescription Details</h2>
            
            {result ? (
              <div className="space-y-6">
                <div className="bg-white/20 p-4 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2">Medicine Details</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-white/70">Medicine</span>
                      <span className="font-medium">{result.medicine} {result.dosage}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Quantity</span>
                      <span className="font-medium">{result.quantity}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Instructions</span>
                      <span className="font-medium">{result.instructions}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Price</span>
                      <span className="font-medium">₹{result.price}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Address</label>
                  <Input 
                    placeholder="Enter your full address"
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/50"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                
                <Button 
                  className="w-full bg-white text-aushadh-700 hover:bg-white/90 py-6 rounded-xl font-medium text-lg"
                  onClick={handleSubmit}
                >
                  Order Now • ₹{result.price}
                  <span className="ml-2 text-sm opacity-80">10 min delivery</span>
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/4997/4997543.png" 
                  alt="Prescription" 
                  className="w-32 h-32 mx-auto mb-4 opacity-50"
                />
                <p className="text-white/60">
                  Upload and analyze your prescription to see medicine details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrescriptionAnalyzer;
