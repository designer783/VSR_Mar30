"use client";




import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car, Mail, Lock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-light-bg py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10 bg-white p-8 sm:p-10 rounded-2xl shadow-custom border border-card-border">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-accent text-white mb-4">
            <Car className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold font-heading text-primary-navy tracking-tight">
            {mode === 'login' ? 'Welcome back' : 'Create account'}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            {mode === 'login' ? 'Please sign in to your account to access your reports' : 'Sign up to start accessing your vehicle reports'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${mode === 'login' ? 'bg-white text-primary-navy shadow-sm' : 'text-text-tertiary hover:text-primary-navy'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${mode === 'signup' ? 'bg-white text-primary-navy shadow-sm' : 'text-text-tertiary hover:text-primary-navy'}`}
          >
            Create Account
          </button>
        </div>
        
        {/* Login Form */}
        {mode === 'login' && (
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-text-primary mb-1">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10 h-12 border-card-border focus-visible:ring-primary-accent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                    Password
                  </label>
                  <a href="#" className="text-sm font-medium text-primary-accent hover:text-hover-accent">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-10 h-12 border-card-border focus-visible:ring-primary-accent"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-card-border text-primary-accent focus:ring-primary-accent"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">
                Remember me
              </label>
            </div>

            <Button type="submit" className="w-full h-12 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2">
              Sign in <ArrowRight className="h-5 w-5" />
            </Button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-card-border"></div></div>
              <div className="relative flex justify-center text-xs"><span className="bg-white px-3 text-text-tertiary">or continue with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 h-11 rounded-lg border border-card-border bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-primary-navy">
                <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 h-11 rounded-lg border border-card-border bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-primary-navy">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                Apple
              </button>
            </div>

            <p className="text-center text-sm text-text-secondary">
              Don't have an account?{' '}
              <button type="button" onClick={() => setMode('signup')} className="font-medium text-primary-accent hover:text-hover-accent">
                Create one now
              </button>
            </p>
          </form>
        )}

        {/* Signup Form */}
        {mode === 'signup' && (
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-text-primary mb-1">
                  Full name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input
                    id="full-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="pl-10 h-12 border-card-border focus-visible:ring-primary-accent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-text-primary mb-1">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10 h-12 border-card-border focus-visible:ring-primary-accent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-text-primary mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="pl-10 h-12 border-card-border focus-visible:ring-primary-accent"
                    placeholder="Create a password"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-text-primary mb-1">
                  Confirm password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="pl-10 h-12 border-card-border focus-visible:ring-primary-accent"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>

            <p className="text-xs text-text-tertiary">
              By creating an account you agree to our{' '}
              <Link href="/terms" className="text-primary-accent hover:underline">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-primary-accent hover:underline">Privacy Policy</Link>.
            </p>

            <Button type="submit" className="w-full h-12 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2">
              Create Account <ArrowRight className="h-5 w-5" />
            </Button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-card-border"></div></div>
              <div className="relative flex justify-center text-xs"><span className="bg-white px-3 text-text-tertiary">or sign up with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 h-11 rounded-lg border border-card-border bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-primary-navy">
                <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 h-11 rounded-lg border border-card-border bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-primary-navy">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                Apple
              </button>
            </div>

            <p className="text-center text-sm text-text-secondary">
              Already have an account?{' '}
              <button type="button" onClick={() => setMode('login')} className="font-medium text-primary-accent hover:text-hover-accent">
                Sign in
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
