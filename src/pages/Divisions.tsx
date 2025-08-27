import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import bakeryImage from '@/assets/bakery-division.jpg';
import restaurantImage from '@/assets/restaurant-division.jpg';
import factoryImage from '@/assets/factory-division.jpg';
import consultingImage from '@/assets/consulting-division.jpg';

const Divisions = () => {
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
      description: 'Artisanal breads, pastries, and custom institutional supply with traditional craftsmanship and modern techniques.',
      image: bakeryImage,
      path: '/divisions/bakery',
      services: [
        'Fresh Daily Baking',
        'Custom Institutional Orders',
        'Artisanal Bread Varieties',
        'Premium Pastries & Desserts',
        'Bulk Supply Solutions',
        'Quality Assurance'
      ],
      highlight: 'Serving fresh, quality baked goods daily with traditional recipes and modern techniques.'
    },
    {
      title: 'Restaurant Division',
      description: 'Premium catering, events, office meals, and wedding services with exceptional quality and presentation.',
      image: restaurantImage,
      path: '/divisions/restaurant',
      services: [
        'Corporate Event Catering',
        'Wedding & Special Events',
        'Office Meal Programs',
        'Menu Planning & Design',
        'Professional Service Staff',
        'Custom Dietary Options'
      ],
      highlight: 'Creating memorable dining experiences for corporate events, weddings, and special occasions.'
    },
    {
      title: 'Factory Division',
      description: 'Advanced food processing, R&D, and product innovation with modern technology and strict quality control.',
      image: factoryImage,
      path: '/divisions/factory',
      services: [
        'Large-Scale Food Processing',
        'Product Development & R&D',
        'Quality Control Systems',
        'Packaging & Distribution',
        'Technology Innovation',
        'Regulatory Compliance'
      ],
      highlight: 'Leading innovation in food processing with state-of-the-art technology and R&D capabilities.'
    },
    {
      title: 'Consulting Division',
      description: 'Expert consulting services for MSMEs with tailored business solutions and industry expertise.',
      image: consultingImage,
      path: '/divisions/consulting',
      services: [
        'Business Strategy Development',
        'MSME Support Programs',
        'Market Research & Analysis',
        'Operational Optimization',
        'Financial Planning',
        'Industry Best Practices'
      ],
      highlight: 'Empowering MSMEs with strategic insights and practical solutions for sustainable growth.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 overflow-hidden parallax-bg"
        style={{
          backgroundImage: 'url(/src/assets/backgrounds/jungle-bg-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in-up">
            Our Divisions
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Four specialized divisions working together to provide comprehensive food solutions 
            for businesses across Kenya.
          </p>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Food Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each division represents our commitment to excellence in specialized areas of the food industry, 
              providing end-to-end solutions for your business needs.
            </p>
          </div>

          <div className="space-y-20">
            {divisions.map((division, index) => (
              <div 
                key={division.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
                    <img 
                      src={division.image} 
                      alt={division.title}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardHeader className="px-0">
                      <CardTitle className="font-playfair text-4xl text-foreground mb-4">
                        {division.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {division.description}
                      </CardDescription>
                      <div className="bg-accent-light p-4 rounded-lg mb-6">
                        <p className="text-accent font-medium italic">
                          "{division.highlight}"
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0">
                      <h4 className="font-semibold text-foreground mb-4">Key Services:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {division.services.map((service) => (
                          <div key={service} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                      <Link to={division.path}>
                        <Button variant="default" className="btn-hero group">
                          Learn More About {division.title}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Message */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Integrated Solutions for Complete Success
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our four divisions work seamlessly together to provide comprehensive food solutions. 
              Whether you need a single service or an integrated approach across multiple divisions, 
              we have the expertise and resources to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-hero">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="btn-outline-warm">
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Divisions;