"use client";



import React, { useState, useRef, useEffect } from "react";
import { US_STATES } from "@/constants";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface StateSelectProps {
  className?: string;
  textClassName?: string;
}

export function StateSelect({ className = "w-40 shrink-0", textClassName = "text-base px-4" }: StateSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const filteredStates = US_STATES.filter(state => 
    state.label.toLowerCase().includes(search.toLowerCase()) || 
    state.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      <div 
        className={cn("w-full h-[52px] bg-transparent border-0 text-text-primary cursor-pointer outline-none font-medium flex items-center justify-between transition-colors hover:bg-slate-50 overflow-hidden", textClassName)}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className="truncate pr-2">
          {selected ? US_STATES.find(s => s.value === selected)?.value : "Select State"}
        </span>
        <div className="pointer-events-none shrink-0 border-l border-transparent pl-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-0 w-[240px] mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="p-2 border-b border-slate-100 flex items-center px-3 bg-slate-50/50">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input 
              type="text" 
              className="w-full border-0 focus:ring-0 text-sm p-1 outline-none bg-transparent" 
              placeholder="Search state..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto w-full py-1 custom-scrollbar">
            <div 
              className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-slate-50 transition-colors ${selected === "" ? "bg-primary-accent/10 text-primary-navy font-semibold" : "text-slate-700"}`}
              onClick={() => {
                setSelected("");
                setIsOpen(false);
                setSearch("");
              }}
            >
              Select State
            </div>
            {filteredStates.length > 0 ? (
              filteredStates.map(state => (
                <div 
                  key={state.value}
                  className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-slate-50 transition-colors ${selected === state.value ? "bg-primary-accent/10 text-primary-navy font-semibold" : "text-slate-700"}`}
                  onClick={() => {
                    setSelected(state.value);
                    setIsOpen(false);
                    setSearch("");
                  }}
                >
                  {state.label} <span className="text-slate-400 ml-1 text-xs">({state.value})</span>
                </div>
              ))
            ) : (
              <div className="px-4 py-4 text-sm text-slate-500 text-center">No states found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
