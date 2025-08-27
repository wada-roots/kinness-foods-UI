import { useEffect } from 'react';
import { Calendar, Users, Target, Eye, Heart, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const About = () => {
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

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Kinness Foods Limited was established with a vision to transform the Kenyan food industry through quality and innovation.'
    },
    {
      year: '2019',
      title: 'Bakery Division Launch',
      description: 'Started operations with our premium bakery division, focusing on artisanal breads and pastries for institutional clients.'
    },
    {
      year: '2020',
      title: 'Restaurant Services Expansion',
      description: 'Expanded into catering and restaurant services, providing high-quality food solutions for events and corporate dining.'
    },
    {
      year: '2021',
      title: 'Factory Operations',
      description: 'Launched our factory division with state-of-the-art food processing equipment and R&D capabilities.'
    },
    {
      year: '2022',
      title: 'Consulting Division',
      description: 'Introduced consulting services to support MSMEs in the food industry with expert guidance and strategic solutions.'
    },
    {
      year: '2023',
      title: 'Innovation & Growth',
      description: 'Continued expansion and innovation across all divisions, serving over 500 business partners nationwide.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide exceptional food solutions that exceed customer expectations while maintaining the highest standards of quality, safety, and innovation across all our divisions.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be Kenya\'s leading integrated food solutions company, recognized for excellence, innovation, and positive impact on communities and businesses we serve.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Quality Excellence • Customer Focus • Innovation • Integrity • Community Impact • Sustainable Growth • Team Collaboration • Continuous Improvement'
    }
  ];

  const leadership = [
    {
      name: 'Chief Executive Officer',
      role: 'Strategic Leadership & Vision',
      description: 'Leading the company\'s strategic direction and overall operations across all four divisions.'
    },
    {
      name: 'Head of Operations',
      role: 'Operational Excellence',
      description: 'Ensuring seamless operations and quality control across bakery, restaurant, factory, and consulting divisions.'
    },
    {
      name: 'Head of Innovation',
      role: 'R&D and Product Development',
      description: 'Driving innovation in food processing, product development, and technology adoption.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 overflow-hidden"
        style={{
          backgroundImage: 'url(/src/assets/backgrounds/jungle-bg-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in-up">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Since 2018, Kinness Foods Limited has been pioneering excellence in the Kenyan food industry, 
            building a legacy of quality, innovation, and trusted partnerships.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                Building Excellence Since 2018
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Kinness Foods Limited was born from a simple yet powerful vision: to transform how Kenya 
                approaches food production, distribution, and consulting. What started as a small bakery 
                operation has evolved into a comprehensive food solutions company serving hundreds of 
                businesses across the nation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Today, our four specialized divisions work in harmony to provide end-to-end food solutions, 
                from artisanal bakery products to strategic business consulting. We're proud to be partners 
                in our clients' success stories, contributing to the growth and development of Kenya's 
                vibrant food industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Business Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Specialized Divisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Commitment</div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground">
                <Award className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Every day, we're committed to raising the bar in food quality, customer service, 
                  and business innovation. Our integrated approach allows us to provide comprehensive 
                  solutions that our competitors simply cannot match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles and aspirations that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-soft animate-on-scroll text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to industry leadership - the milestones that shaped our story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`flex flex-col md:flex-row items-center animate-on-scroll ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-md z-10 hidden md:block"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals driving our vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card p-8 rounded-2xl shadow-soft animate-on-scroll text-center card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;