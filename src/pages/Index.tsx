import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Lightbulb, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import ScrollToTop from '@/components/ScrollToTop';
import bakeryImage from '@/assets/bakery-division.jpg';
import restaurantImage from '@/assets/restaurant-division.jpg';
import factoryImage from '@/assets/factory-division.jpg';
import consultingImage from '@/assets/consulting-division.jpg';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const divisionsRef = useRef<HTMLDivElement>(null);

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

  const divisions = [
    {
      title: 'Bakery Division',
      description: 'Artisanal breads, pastries, and custom institutional supply with traditional craftsmanship.',
      image: bakeryImage,
      path: '/divisions/bakery',
      highlights: ['Fresh Daily Baking', 'Custom Orders', 'Institutional Supply']
    },
    {
      title: 'Restaurant Division',
      description: 'Premium catering, events, office meals, and wedding services with exceptional quality.',
      image: restaurantImage,
      path: '/divisions/restaurant',
      highlights: ['Event Catering', 'Corporate Meals', 'Wedding Services']
    },
    {
      title: 'Factory Division',
      description: 'Advanced food processing, R&D, and product innovation with modern technology.',
      image: factoryImage,
      path: '/divisions/factory',
      highlights: ['Food Processing', 'R&D Innovation', 'Quality Control']
    },
    {
      title: 'Consulting Division',
      description: 'Expert consulting services for MSMEs with tailored business solutions.',
      image: consultingImage,
      path: '/divisions/consulting',
      highlights: ['MSME Support', 'Business Strategy', 'Industry Expertise']
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored food solutions designed specifically for your unique business needs and requirements.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring the highest standards in every product and service.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep industry knowledge and commitment to excellence.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Cutting-edge R&D and continuous innovation to stay ahead of industry trends.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Divisions Overview */}
      <section ref={divisionsRef} className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Four Divisions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each division represents our commitment to excellence in specialized areas of the food industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <Card 
                key={division.title} 
                className="card-hover animate-on-scroll group overflow-hidden bg-card border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={division.image} 
                    alt={division.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative">
                  <CardTitle className="font-playfair text-2xl text-foreground mb-2">
                    {division.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {division.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {division.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link to={division.path}>
                    <Button variant="outline" className="btn-outline-warm w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Kinness Foods?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the food industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.title}
                className="text-center animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-on-scroll">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll">
            Let's discuss how Kinness Foods Limited can provide the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
