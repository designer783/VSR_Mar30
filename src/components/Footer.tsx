import { Car, Facebook, Instagram, Linkedin, Phone, HelpCircle, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img src="/logo-white.png" alt="Vehicles Report" className="h-9 w-auto opacity-90" />
            </Link>
            <p className="text-white/50 text-[13px] leading-relaxed max-w-[240px]">
              Advanced vehicle history reports and original factory window stickers for modern and classic vehicles.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Resources</h4>
            <ul className="space-y-3 text-[13px] text-white/50 font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition-colors">Articles</Link></li>
              <li><Link href="/sample" className="hover:text-white transition-colors">Sample Report</Link></li>
              <li><Link href="/technology" className="hover:text-white transition-colors">Our Technology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Solutions</h4>
            <ul className="space-y-3 text-[13px] text-white/50 font-medium">
              <li><Link href="/window-stickers" className="hover:text-white transition-colors">Window Sticker</Link></li>
              <li><Link href="/vin-check" className="hover:text-white transition-colors">VIN History Check</Link></li>
              <li><Link href="/vin-decoder" className="hover:text-white transition-colors">VIN Decoder</Link></li>
              <li><Link href="/license-plate" className="hover:text-white transition-colors">License Plate Lookup</Link></li>
              <li><Link href="/classic-vehicle-history" className="hover:text-white transition-colors">Classic Vehicle History</Link></li>
              <li><Link href="/recalls" className="hover:text-white transition-colors">Recalls</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Support</h4>
            <ul className="space-y-3 text-[13px] text-white/50 font-medium">
              <li><Link href="/faq" className="hover:text-white transition-colors">Help & FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/request-refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} VehiclesReport. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Data provided by NMVTIS and other trusted sources.</p>
        </div>
      </div>
    </footer>
  )
}
