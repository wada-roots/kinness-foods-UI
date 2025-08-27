import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Users, Award, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import factoryImage from '@/assets/factory-division.jpg';

const FactoryDivision = () => {
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

  const services = [
    {
      title: 'Large-Scale Food Processing',
      description: 'Industrial-grade food processing with state-of-the-art equipment and technology.',
      features: ['Automated Production Lines', 'Batch Processing', 'Continuous Processing', 'Custom Formulations'],
      image: '/src/assets/services/food-processing.jpg'
    },
    {
      title: 'Product Development & R&D',
      description: 'Innovation-driven research and development for new food products and processes.',
      features: ['Recipe Development', 'Nutritional Analysis', 'Shelf-Life Testing', 'Market Research'],
      image: '/src/assets/services/product-development.jpg'
    },
    {
      title: 'Quality Control Systems',
      description: 'Comprehensive quality assurance programs ensuring product safety and consistency.',
      features: ['HACCP Implementation', 'ISO Standards', 'Lab Testing', 'Traceability Systems'],
      image: '/src/assets/services/food-processing.jpg'
    },
    {
      title: 'Technology Innovation',
      description: 'Complete packaging solutions and distribution network management.',
      features: ['Custom Packaging Design', 'Automated Packaging', 'Logistics Management', 'Cold Chain Solutions'],
      image: '/src/assets/services/product-development.jpg'
    }
  ];

  const features = [
    {
      icon: Factory,
      title: 'Modern Technology',
      description: 'State-of-the-art processing equipment and automation systems for maximum efficiency.'
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'Rigorous quality control processes meeting international food safety standards.'
    },
    {
      icon: Settings,
      title: 'Process Innovation',
      description: 'Continuous improvement and innovation in food processing techniques and methods.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled food technologists and engineers with extensive industry experience.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Units Daily Capacity' },
    { number: '25+', label: 'Product Lines' },
    { number: '99.9%', label: 'Quality Standards' },
    { number: '365', label: 'Days Operation' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${factoryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in-up">
            Factory Division
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Advanced food processing, R&D, and product innovation with modern technology 
            and strict quality control standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Discuss Processing Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* Division Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                Innovation in Food Processing
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Factory Division represents the cutting edge of food processing technology and innovation. 
                With state-of-the-art equipment and a dedicated R&D team, we transform raw ingredients 
                into high-quality food products that meet the demanding requirements of today's market.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From concept to market, we provide comprehensive food processing solutions including 
                product development, large-scale manufacturing, quality control, and distribution. 
                Our facility operates under the strictest food safety standards, ensuring every 
                product meets international quality benchmarks.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <Card className="shadow-elegant bg-gradient-hero text-primary-foreground">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl flex items-center">
                    <Factory className="w-8 h-8 mr-3" />
                    Our Technology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 leading-relaxed mb-4">
                    We invest in the latest food processing technology to ensure maximum efficiency, 
                    product quality, and food safety throughout our operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Automated processing and packaging lines
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Advanced quality control laboratories
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Temperature-controlled storage facilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Real-time monitoring and tracking systems
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Processing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive food processing solutions from concept development to market-ready products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="card-hover animate-on-scroll shadow-soft overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60"></div>
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Factory Division?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to technological excellence and quality standards makes us a trusted partner in food processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
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
            Transform Your Food Ideas into Reality
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll">
            Partner with our Factory Division to bring your food products to market with 
            the highest standards of quality, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/divisions">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4">
                Explore Other Divisions
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

export default FactoryDivision;