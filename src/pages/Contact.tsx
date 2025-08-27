import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: '',
    message: ''
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'Kinness Foods Limited',
        'Corporate Headquarters',
        'Nairobi, Kenya'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+234 (0) 123 456 7890',
        '+234 (0) 123 456 7891',
        'Mon - Fri: 8:00 AM - 6:00 PM'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@kinnessfoods.com',
        'sales@kinnessfoods.com',
        'support@kinnessfoods.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const divisions = [
    { value: '', label: 'Select Division' },
    { value: 'bakery', label: 'Bakery Division' },
    { value: 'restaurant', label: 'Restaurant Division' },
    { value: 'factory', label: 'Factory Division' },
    { value: 'consulting', label: 'Consulting Division' },
    { value: 'general', label: 'General Inquiry' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 overflow-hidden parallax-bg"
        style={{
          backgroundImage: 'url(/src/assets/backgrounds/jungle-bg-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in-up">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Ready to discuss your food solution needs? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="text-center card-hover animate-on-scroll shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-playfair text-3xl text-foreground">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 (0) 123 456 7890"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="division" className="block text-sm font-medium text-foreground mb-2">
                          Division of Interest
                        </label>
                        <select
                          id="division"
                          name="division"
                          value={formData.division}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          {divisions.map((division) => (
                            <option key={division.value} value={division.value}>
                              {division.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements, questions, or how we can help you..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="btn-hero w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-on-scroll space-y-8">
              {/* Google Map Placeholder */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-foreground">
                    Find Us
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Visit our headquarters in Nairobi, Kenya
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive map will be displayed here</p>
                      <p className="text-sm text-muted-foreground mt-2">Nairobi, Kenya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Card */}
              <Card className="shadow-elegant bg-gradient-hero text-primary-foreground">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">
                    Need Immediate Assistance?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 mb-6">
                    For urgent inquiries or immediate support, don't hesitate to call us directly. 
                    Our team is ready to assist you with any questions about our services.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      <span>+234 (0) 123 456 7890</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      <span>info@kinnessfoods.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;