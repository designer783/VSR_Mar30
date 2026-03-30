"use client";




import React, { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "motion/react"

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! How can I help you with your vehicle history report today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMsg])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! A representative will be with you shortly. In the meantime, feel free to check our FAQ page.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMsg])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-primary-navy p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-accent rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Vehicles Report Support</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-verification rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.sender === 'user' ? 'bg-primary-accent' : 'bg-slate-200'
                    }`}>
                      {msg.sender === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-primary-navy" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-primary-accent text-white rounded-tr-none shadow-md' 
                        : 'bg-white text-primary-navy border border-slate-200 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.text}
                      <div className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-slate-400'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-200 flex gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 h-10 bg-slate-50 border-slate-200 focus:ring-primary-accent rounded-xl"
              />
              <Button 
                type="submit"
                size="icon"
                className="h-10 w-10 bg-primary-accent hover:bg-hover-accent text-white rounded-xl shrink-0"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors ${
          isOpen ? 'bg-white text-primary-navy border border-slate-200' : 'bg-primary-accent text-white'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}
