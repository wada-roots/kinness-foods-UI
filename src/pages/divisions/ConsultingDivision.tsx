import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import consultingImage from '@/assets/consulting-division.jpg';

const ConsultingDivision = () => {
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
      title: 'Business Strategy Development',
      description: 'Comprehensive strategic planning and business development consulting for food industry enterprises.',
      features: ['Market Analysis & Research', 'Business Plan Development', 'Competitive Strategy', 'Growth Planning'],
      image: '/src/assets/services/business-strategy.jpg'
    },
    {
      title: 'MSME Support Programs',
      description: 'Specialized support and guidance for Micro, Small, and Medium Enterprises in the food sector.',
      features: ['Startup Guidance', 'Funding Assistance', 'Mentorship Programs', 'Skills Development'],
      image: '/src/assets/services/msme-support.jpg'
    },
    {
      title: 'Market Research & Analysis',
      description: 'Process improvement and operational efficiency consulting to maximize productivity and reduce costs.',
      features: ['Process Mapping', 'Efficiency Analysis', 'Cost Reduction', 'Quality Improvement'],
      image: '/src/assets/services/business-strategy.jpg'
    },
    {
      title: 'Financial Planning',
      description: 'Financial strategy and planning services to ensure sustainable business growth and profitability.',
      features: ['Financial Modeling', 'Investment Planning', 'Risk Assessment', 'Performance Metrics'],
      image: '/src/assets/services/msme-support.jpg'
    }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: 'Industry Expertise',
      description: 'Deep knowledge and experience across all aspects of the food industry value chain.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: 'Strategies designed to drive sustainable growth and competitive advantage.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Working closely with clients to develop practical, implementable solutions.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful client transformations and business improvements.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Businesses Consulted' },
    { number: '50+', label: 'MSMEs Supported' },
    { number: '85%', label: 'Success Rate' },
    { number: '5+', label: 'Years Experience' }
  ];

  const caseStudies = [
    {
      title: 'Small Bakery Expansion',
      description: 'Helped a local bakery scale operations and increase revenue by 300% within 18 months.',
      results: ['300% Revenue Growth', 'Market Expansion', 'Process Optimization']
    },
    {
      title: 'Restaurant Chain Development',
      description: 'Guided a single restaurant to develop into a successful 5-location chain.',
      results: ['5 New Locations', 'Brand Development', 'Standardized Operations']
    },
    {
      title: 'Food Processing Startup',
      description: 'Supported a startup from concept to market-ready products and distribution.',
      results: ['Product Launch', 'Market Entry', 'Funding Secured']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 overflow-hidden parallax-bg"
        style={{
          backgroundImage: `url(${consultingImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in-up">
            Consulting Division
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Expert consulting services for MSMEs with tailored business solutions, 
            strategic guidance, and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Case Studies
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
                Empowering Business Success
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Consulting Division is dedicated to empowering Micro, Small, and Medium Enterprises (MSMEs) 
                in the food industry. With years of hands-on experience across all aspects of food business 
                operations, we provide strategic guidance, practical solutions, and ongoing support to help 
                businesses achieve sustainable growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From startup guidance to operational optimization, our consultants work closely with clients 
                to understand their unique challenges and develop customized strategies that drive real results. 
                We believe in building long-term partnerships that support continuous growth and success.
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
                    <Lightbulb className="w-8 h-8 mr-3" />
                    Our Philosophy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 leading-relaxed mb-4">
                    We believe every business has the potential for greatness. Our role is to unlock 
                    that potential through strategic thinking, practical solutions, and unwavering support.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Practical, implementable strategies
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Data-driven decision making
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Long-term partnership approach
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Continuous support and guidance
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
              Our Consulting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to address every aspect of food business development and growth.
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

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our consulting partnerships demonstrate the transformative power of strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.title}
                className="card-hover animate-on-scroll shadow-soft"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-foreground">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-foreground mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success mr-2" />
                        {result}
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Consulting Division?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unique combination of industry expertise and practical experience delivers tangible results for our clients.
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll">
            Contact our Consulting Division today to discover how we can help your food business 
            achieve its full potential with strategic guidance and practical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4">
                Schedule Free Consultation
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

export default ConsultingDivision;