"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // TODO: wire to real backend/Formspree/Google Form
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-16">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <SectionHeading>Send a Message</SectionHeading>
          
          {status === "success" ? (
            <div className="bg-primary/10 border-2 border-primary p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">Message Sent</h3>
              <p className="font-sans">Thank you for reaching out. The organizing committee will get back to you shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 font-sans text-sm font-bold tracking-widest uppercase underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form action="mailto:icaitewa27@tkmce.ac.in" method="POST" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans focus:border-primary focus:outline-none transition-colors"
                  placeholder="Prof. Jane Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans focus:border-primary focus:outline-none transition-colors"
                  placeholder="jane.doe@university.edu"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-surface border-2 border-foreground/20 px-4 py-3 font-sans focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your inquiry regarding the conference..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-sm tracking-widest uppercase transition-colors duration-200 border-2 bg-foreground border-foreground text-surface hover:bg-foreground/80 hover:border-foreground/80"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div>
          <SectionHeading>Organizing Committee</SectionHeading>
          
          <div className="bg-foreground text-surface p-8 mb-8 flex flex-col sm:flex-row items-start justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Postal Address</h3>
              <p className="font-sans leading-relaxed text-surface/80">
                Department of Mechanical Engineering<br/>
                TKM College of Engineering<br/>
                Karicode, Kollam<br/>
                Kerala, India - 691005
              </p>
            </div>
            <img 
              src="/ai_aictc.png" 
              alt="IC-AITEWA Conference Logo" 
              className="w-28 h-auto object-contain shrink-0 opacity-90 self-center sm:self-start" 
            />
          </div>

          <div className="border-2 border-foreground p-8">
            <h3 className="font-serif text-2xl font-bold mb-6">Key Contacts</h3>
            
            <div className="space-y-6">
              <div>
                <p className="font-sans font-bold text-sm tracking-widest uppercase text-primary mb-1">General Inquiries</p>
                <p className="font-serif font-bold text-lg">Dr. Baiju V</p>
                <p className="font-sans text-sm text-foreground/80">Organizing Secretary</p>
                <p className="font-sans text-sm text-foreground/80"><a href="mailto:baiju@tkmce.ac.in" className="hover:text-primary transition-colors">baiju@tkmce.ac.in</a></p>
                <p className="font-sans text-sm text-foreground/80">+91 9895937476</p>
              </div>
              
              <div>
                <p className="font-sans font-bold text-sm tracking-widest uppercase text-primary mb-1">Registration & Papers</p>
                <p className="font-serif font-bold text-lg">Dr. Jesna Mohamed</p>
                <p className="font-sans text-sm text-foreground/80">Organizing Secretary</p>
                <p className="font-sans text-sm text-foreground/80"><a href="mailto:jesnamohammed@tkmce.ac.in" className="hover:text-primary transition-colors">jesnamohammed@tkmce.ac.in</a></p>
                <p className="font-sans text-sm text-foreground/80">+91 9895010550</p>
              </div>

              <div>
                <p className="font-sans font-bold text-sm tracking-widest uppercase text-primary mb-1">Email</p>
                <p className="font-sans text-sm text-foreground/80"><a href="mailto:icaitewa27@tkmce.ac.in" className="hover:text-primary transition-colors">icaitewa27@tkmce.ac.in</a></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
