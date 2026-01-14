import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@assets/generated_images/abstract_blue_enterprise_technology_network_background.png";
import officeBg from "@assets/generated_images/modern_corporate_glass_office_building_abstract.png";
import {
  ArrowRight,
  Building2,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  X
} from "lucide-react";
import React, { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent",
      description: "Thank you for contacting us. Our enterprise team will respond shortly.",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">Appsthink IT Services</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Solutions</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">Company</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Contact</button>
            <Button onClick={() => scrollToSection('contact')} variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-none">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border p-4 flex flex-col gap-4 shadow-lg">
            <button onClick={() => scrollToSection('hero')} className="text-left font-medium p-2 hover:bg-muted">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-left font-medium p-2 hover:bg-muted">Solutions</button>
            <button onClick={() => scrollToSection('about')} className="text-left font-medium p-2 hover:bg-muted">Company</button>
            <button onClick={() => scrollToSection('contact')} className="text-left font-medium p-2 hover:bg-muted">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src={heroBg} alt="Technology Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Globe className="h-3 w-3" /> Global Digital Leader
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Engineering the <span className="text-blue-500">Future</span> of Digital Business
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              We deliver enterprise-grade web development and business IT products. 
              Transforming complex challenges into scalable digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 rounded-none">
                Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={() => scrollToSection('services')} variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 hover:text-white rounded-none bg-transparent">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Enterprise Clients", value: "500+" },
              { label: "Projects Delivered", value: "1.2k" },
              { label: "Global Offices", value: "12" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Enterprise Solutions</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-slate-600">
              End-to-end technology services designed for scalability, security, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Web Development",
                description: "Custom enterprise web applications built on scalable architectures. We focus on performance, security, and user experience.",
                price: "₹15,000"
              },
              {
                icon: <Server className="h-8 w-8 text-blue-600" />,
                title: "Business IT Products",
                description: "Comprehensive IT infrastructure and software solutions tailored for large-scale organizational needs and workflows.",
                price: "₹50,000"
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
                title: "Digital Transformation",
                description: "Strategic consulting to modernize legacy systems and integrate cutting-edge digital technologies into your business.",
                price: "₹1,00,000"
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-6 p-4 bg-white border border-slate-100 inline-block shadow-sm group-hover:bg-blue-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-lg font-semibold text-blue-700 mb-4">{service.price}</div>
                <a
                  href={`/test-payment?product=${encodeURIComponent(service.title)}&amount=${encodeURIComponent(service.price)}`}
                  className="inline-flex items-center text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition-colors"
                >
                  Pay Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Why Leading Enterprises Choose Us</h2>
              <div className="space-y-6 text-slate-300">
                <p>
                  We are a professional digital agency committed to delivering excellence. Like global leaders in the industry, we prioritize reliability, innovation, and long-term partnership.
                </p>
                <p>
                  Our team of experts leverages deep industry knowledge and technical expertise to solve the most complex business challenges. We don't just build websites; we build business value.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {["Industry Standard Security", "24/7 Enterprise Support", "Agile Methodology", "Scalable Architecture"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-blue-500"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 z-0"></div>
              <img src={officeBg} alt="Corporate Office" className="relative z-10 w-full shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row">
            
            {/* Contact Info */}
            <div className="md:w-2/5 bg-slate-900 text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-blue-200 text-sm mb-1">Visit Us</p>
                      <p className="leading-relaxed">H4-1004, Eros Sampoornam<br/>Noida, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-blue-200 text-sm mb-1">Email Us</p>
                      <p>nishagautamnishu@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-blue-200 text-sm mb-1">Call Us</p>
                      <p>9319020990</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-xs text-slate-500">
                  © 2026 Appsthink IT Services.<br/>All rights reserved.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5 p-10 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send an Inquiry</h3>
              <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you.</p>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="rounded-none border-slate-300 focus-visible:ring-blue-600"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+91 0000000000" 
                    className="rounded-none border-slate-300 focus-visible:ring-blue-600"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="enquiry" className="text-sm font-semibold text-slate-700">Project Details</label>
                  <Textarea 
                    id="enquiry" 
                    placeholder="Tell us about your project requirements..." 
                    className="min-h-[120px] rounded-none border-slate-300 focus-visible:ring-blue-600"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-none">
                  Submit Inquiry
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
