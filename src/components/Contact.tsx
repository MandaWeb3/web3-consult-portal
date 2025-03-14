
import React, { useState } from 'react';
import { Reveal } from './animations/Reveal';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Let's <span className="text-gradient">Connect</span>
                  </h2>
                  <p className="text-lg text-foreground/80 mb-8">
                    Interested in working together? Fill out the form and I'll get back to you shortly.
                  </p>
                  
                  <div className="space-y-5">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-web3-primary/10 flex items-center justify-center text-web3-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-foreground/70">contact@yourdomain.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-web3-accent/10 flex items-center justify-center text-web3-accent">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Social</h4>
                        <div className="flex space-x-3 text-foreground/70">
                          <a href="#" className="hover:text-web3-primary transition-colors">Twitter</a>
                          <a href="#" className="hover:text-web3-primary transition-colors">LinkedIn</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={200}>
                <div className="p-6 rounded-2xl bg-web3-primary/5 border border-web3-primary/20">
                  <h3 className="text-xl font-medium mb-3">Ready to transform your business?</h3>
                  <p className="text-foreground/80 mb-0">
                    Schedule a free 30-minute consultation to discuss your project and how we can work together.
                  </p>
                </div>
              </Reveal>
            </div>
            
            <Reveal direction="left">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-foreground/70">
                      Thank you for reaching out. I'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-web3-primary/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-web3-primary/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-web3-primary/50 transition-all"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="gradient"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
