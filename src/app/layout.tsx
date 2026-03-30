import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { AgentationWrapper } from "@/components/AgentationWrapper";


export const metadata: Metadata = {
  title: "Vehicles Report - Get Your Vehicle History",
  description: "Check for accidents, title issues, repairs, and more with our comprehensive vehicle history reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-text-primary bg-white">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          {process.env.NODE_ENV === "development" && <AgentationWrapper />}
        </div>
      </body>
    </html>
  );
}
