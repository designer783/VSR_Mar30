"use client";




import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock } from "lucide-react"
import { FadeIn } from "@/components/ui/FadeIn"

export default function RequestRefundPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Main Title */}
        <FadeIn direction="down" className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-10">
          Request a refund
        </FadeIn>

        {/* Section 1: Request a call */}
        <FadeIn direction="up">
          <div className="bg-white rounded-2xl p-6 md:p-10 mb-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-heading text-primary-accent mb-2">Any problems with your order?</h2>
            <p className="text-text-secondary text-sm md:text-base mb-6 leading-relaxed">
              Let a customer service representative reach out to you and get a chance to get $50.00 worth of report/sticker credits.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary-navy">Email <span className="text-red-500">*</span></label>
                  <Input type="email" placeholder="Email" className="h-12 bg-slate-50 border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary-navy">Phone number <span className="text-red-500">*</span></label>
                  <Input placeholder="Phone" className="h-12 bg-slate-50 border-slate-200 rounded-xl" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-primary-navy">Additional Notes</label>
                <textarea 
                  className="w-full min-h-[120px] p-4 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/20 transition-all text-sm bg-slate-50 rounded-xl"
                  placeholder="Enter your additional notes (optional)"
                ></textarea>
              </div>
              
              <Button className="w-full h-12 bg-primary-navy hover:bg-secondary-navy text-white font-bold rounded-xl transition-all">
                Request a call
              </Button>
            </form>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <div className="flex gap-3 mb-10 p-4 bg-slate-100 rounded-xl border border-slate-200">
          <Clock className="h-5 w-5 text-text-tertiary shrink-0 mt-0.5" />
          <p className="text-text-secondary text-sm leading-relaxed">
            Please allow the company some time to process your request. The duration of time required to receive a refund may vary depending on the policies and procedures of the company.
          </p>
        </div>

        {/* Section 2: Submit request */}
        <FadeIn direction="up">
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-8">Submit Refund Request</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary-navy">VIN</label>
                  <Input placeholder="VEHICLE IDENTIFICATION NUMBER" className="h-12 bg-slate-50 border-slate-200 rounded-xl uppercase" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary-navy">Email <span className="text-red-500">*</span></label>
                  <Input type="email" placeholder="Email" className="h-12 bg-slate-50 border-slate-200 rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary-navy">First name</label>
                  <Input placeholder="First name" className="h-12 bg-slate-50 border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary-navy">Last name</label>
                  <Input placeholder="Last name" className="h-12 bg-slate-50 border-slate-200 rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary-navy">Phone Number <span className="text-red-500">*</span></label>
                  <Input placeholder="Phone" className="h-12 bg-slate-50 border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary-navy">Product type</label>
                  <select className="w-full h-12 px-4 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/20 bg-slate-50 text-sm rounded-xl appearance-none">
                    <option value="">Select your product type</option>
                    <option value="history">Vehicle History Report</option>
                    <option value="sticker">Window Sticker</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-primary-navy">Reason for refund <span className="text-red-500">*</span></label>
                <select className="w-full h-12 px-4 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/20 bg-slate-50 text-sm rounded-xl appearance-none">
                  <option value="">Reason for refund</option>
                  <option value="not_received">Report not received</option>
                  <option value="incorrect_data">Incorrect data</option>
                  <option value="duplicate">Duplicate charge</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-primary-navy">Date of purchase</label>
                <Input type="date" className="h-12 bg-slate-50 border-slate-200 rounded-xl" />
              </div>

              <Button className="w-full h-12 bg-primary-accent hover:bg-hover-accent text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-accent/20">
                Submit request
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
