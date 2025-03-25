
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Clock, Loader2, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

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
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-sky-500 via-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="inline-block backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg">Scan. Analyze.</span>
            <br />
            <span className="inline-block mt-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg">Get Medicines in 10 Minutes</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4 backdrop-blur-sm bg-white/5 py-2 px-4 rounded-lg inline-block">
            Upload your prescription and let our AI instantly analyze it. 
            We'll deliver your medicines to your doorstep in minutes, not days.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-xl overflow-hidden">
            <CardHeader className="border-b border-white/10 pb-4">
              <CardTitle className="text-xl text-white">Upload Prescription</CardTitle>
              <CardDescription className="text-white/70">
                Drag and drop or browse to upload your prescription
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div 
                className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center cursor-pointer hover:border-white/50 transition-all min-h-[200px] flex flex-col items-center justify-center group"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById('prescription-upload')?.click()}
              >
                {previewUrl ? (
                  <div className="w-full">
                    <div className="relative mb-4 mx-auto w-fit">
                      <img 
                        src={previewUrl} 
                        alt="Prescription preview" 
                        className="max-h-[180px] mx-auto rounded-lg border-4 border-white/20 shadow-lg object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                        <span className="text-sm font-medium text-white">Click to change</span>
                      </div>
                    </div>
                    <p className="text-sm text-white/60">{file?.name}</p>
                  </div>
                ) : (
                  <>
                    <div className="p-3 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-all">
                      <Upload className="h-10 w-10 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-white/80 group-hover:text-white transition-colors">
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
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-4">
              <Button 
                className="w-full bg-white text-blue-700 hover:bg-white/90 py-6 rounded-xl font-medium text-lg shadow-lg"
                onClick={analyzePrescription}
                disabled={!file || loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze Prescription
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Results Section */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-xl overflow-hidden">
            <CardHeader className="border-b border-white/10 pb-4">
              <CardTitle className="text-xl text-white">Prescription Details</CardTitle>
              <CardDescription className="text-white/70">
                Your medicine details will appear here after analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {result ? (
                <div className="space-y-6">
                  <div className="backdrop-blur-md bg-white/20 p-5 rounded-xl border border-white/20">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-300" />
                      Medicine Details
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-white/70">Medicine</span>
                        <span className="font-medium text-right">{result.medicine} {result.dosage}</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-white/70">Quantity</span>
                        <span className="font-medium text-right">{result.quantity}</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-white/70">Instructions</span>
                        <span className="font-medium text-right">{result.instructions}</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-white/70">Price</span>
                        <span className="font-medium text-lg text-right">₹{result.price}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Delivery Address</label>
                    <Input 
                      placeholder="Enter your full address"
                      className="bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:border-white/50 h-12 text-base"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  
                  <div className="bg-white/20 p-3 rounded-lg flex items-center gap-3 border border-white/10">
                    <Clock className="h-5 w-5 flex-shrink-0 text-green-300" />
                    <p className="text-sm">Expected delivery in <span className="font-semibold">10 minutes</span> after order confirmation</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 h-[282px] flex flex-col items-center justify-center">
                  <div className="p-4 rounded-full bg-white/10 mb-4 animate-pulse">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/4997/4997543.png" 
                      alt="Prescription" 
                      className="w-16 h-16 opacity-70 mix-blend-luminosity"
                    />
                  </div>
                  <p className="text-white/70 max-w-xs mx-auto">
                    Upload and analyze your prescription to see medicine details
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-4">
              <Button 
                className={`w-full py-6 rounded-xl font-medium text-lg shadow-lg transition-all duration-300 ${
                  result 
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white' 
                    : 'bg-white/10 text-white/50 cursor-not-allowed hover:bg-white/10'
                }`}
                onClick={handleSubmit}
                disabled={!result}
              >
                {result ? (
                  <>
                    Order Now • ₹{result.price}
                    <span className="ml-2 text-sm opacity-80">10 min delivery</span>
                  </>
                ) : (
                  'Submit Prescription'
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrescriptionAnalyzer;
