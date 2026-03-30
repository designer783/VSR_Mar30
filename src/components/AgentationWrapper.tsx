"use client";



import { Agentation } from 'agentation';

export function AgentationWrapper() {
  // We only run this on the client
  if (typeof window === 'undefined') return null;

  return <Agentation />;
}
