"use client";



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VinInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    tag: "Step 1 of 3",
    subtitle: "YOUR VEHICLE'S DNA",
    title: "What is VIN?",
    description: "A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every motor vehicle when it's manufactured. Think of it as your vehicle's fingerprint - no two vehicles in operation have the same VIN.",
    image: "/assets/images/vin-info/step1_highres.png",
    buttonText: "Continue",
    showPrevious: false,
  },
  {
    tag: "Step 2 of 3",
    subtitle: "MULTIPLE LOCATIONS",
    title: "Where to Find It?",
    description: "The VIN can be found in several locations: on the driver's side dashboard (visible through the windshield), inside the driver's door jamb, on vehicle registration documents, and on your insurance card.",
    image: "/assets/images/vin-info/step2_highres.png",
    buttonText: "Continue",
    showPrevious: true,
  },
  {
    tag: "Step 3 of 3",
    subtitle: "ESSENTIAL INFORMATION",
    title: "Why It Matters?",
    description: "The VIN provides crucial information about your vehicle including the manufacturer, model year, place of manufacture, and unique serial number. It's essential for vehicle registration, insurance, recalls, and theft prevention.",
    image: "/assets/images/vin-info/step3_highres.png",
    buttonText: "Got it!",
    showPrevious: true,
  }
];

export function VinInfoModal({ isOpen, onClose }: VinInfoModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#1a2130] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Illustration (Dynamic based on step) */}
          <div className="md:w-1/2 bg-white relative overflow-hidden flex items-center justify-center p-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <img
                    src={steps[currentStep].image}
                    alt={steps[currentStep].title}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Step Tag */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-accent mr-2" />
                  <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">{steps[currentStep].tag}</span>
                </div>

                {/* Info Header */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-primary-accent uppercase tracking-[0.2em]">
                    {steps[currentStep].subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
                    {steps[currentStep].title}
                  </h2>
                  <div className="w-16 h-1 bg-primary-accent rounded-full mt-4" />
                </div>

                {/* Description */}
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans font-normal opacity-90">
                  {steps[currentStep].description}
                </p>

                {/* Pagination Dots */}
                <div className="flex space-x-2 pt-4">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentStep ? "w-8 bg-white" : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4 pt-6">
                  {steps[currentStep].showPrevious && (
                    <Button
                      onClick={handlePrev}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 px-6 rounded-xl hover:text-white"
                    >
                      <ChevronLeft className="w-5 h-5 mr-2" />
                      Previous
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    className="flex-1 bg-white hover:bg-slate-100 text-[#1a2130] h-12 px-8 rounded-xl font-bold shadow-lg shadow-black/20"
                  >
                    {steps[currentStep].buttonText}
                    {currentStep === 2 ? <Check className="ml-2 w-5 h-5" /> : <ChevronRight className="ml-2 w-5 h-5" />}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function WhereToFindVinModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <img 
            src="/assets/images/vin-info/where_to_find.png" 
            alt="Where to find the VIN"
            className="w-full h-auto object-contain rounded-xl"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
