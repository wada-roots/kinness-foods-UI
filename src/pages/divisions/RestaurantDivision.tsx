import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Award, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import restaurantImage from '@/assets/restaurant-division.jpg';
import corporateEventImage from '@/assets/services/corporate-event-catering.jpg';
import weddingEventsImage from '@/assets/services/wedding-special-events.jpg';
import officeMealImage from '@/assets/services/office-meal-programs.jpg';
import menuPlanningImage from '@/assets/services/menu-planning-design.jpg';

const RestaurantDivision = () => {
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
      title: 'Corporate Event Catering',
      description: 'Professional catering services for business meetings, conferences, and corporate events.',
      features: ['Executive Lunch Meetings', 'Conference Catering', 'Product Launches', 'Team Building Events'],
      image: corporateEventImage
    },
    {
      title: 'Wedding & Special Events',
      description: 'Elegant catering solutions for weddings and milestone celebrations.',
      features: ['Wedding Receptions', 'Anniversary Celebrations', 'Birthday Parties', 'Cultural Events'],
      image: weddingEventsImage
    },
    {
      title: 'Office Meal Programs',
      description: 'Daily meal solutions for corporate offices and workplaces.',
      features: ['Daily Lunch Service', 'Breakfast Programs', 'Healthy Menu Options', 'Dietary Accommodations'],
      image: officeMealImage
    },
    {
      title: 'Menu Planning & Design',
      description: 'Custom menu creation and culinary consultation services.',
      features: ['Seasonal Menus', 'Nutritional Planning', 'Cultural Cuisine', 'Dietary Restrictions'],
      image: menuPlanningImage
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Expert Culinary Team',
      description: 'Professional chefs with extensive experience in diverse cuisines and dietary requirements.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest ingredients and presentation standards for every event we cater.'
    },
    {
      icon: Users,
      title: 'Professional Service',
      description: 'Trained service staff ensuring seamless execution of your catering needs.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Reliable scheduling and prompt service delivery for all your events and programs.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Events Catered' },
    { number: '50+', label: 'Menu Options' },
    { number: '1000+', label: 'Guests Served Monthly' },
    { number: '24/7', label: 'Event Support' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${restaurantImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in-up">
            Restaurant Division
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Premium catering, events, office meals, and wedding services with exceptional quality 
            and professional presentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Plan Your Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Menu Options
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
                Creating Memorable Dining Experiences
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Restaurant Division specializes in creating exceptional dining experiences for corporate events, 
                weddings, and special occasions. With a team of skilled chefs and professional service staff, 
                we bring restaurant-quality cuisine and service directly to your venue.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From intimate business dinners to large-scale wedding receptions, we have the expertise 
                and resources to handle events of any size. Our commitment to quality ingredients, 
                creative presentation, and seamless service ensures your event will be truly memorable.
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
                    <ChefHat className="w-8 h-8 mr-3" />
                    Our Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 leading-relaxed mb-4">
                    We believe that great catering goes beyond just serving food. It's about creating 
                    an experience that reflects your vision and exceeds your guests' expectations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Customized menus for every occasion
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Professional presentation and service
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Dietary accommodations and preferences
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Full event coordination support
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
              Our Catering Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive catering solutions tailored to create memorable experiences for every occasion.
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
              Why Choose Our Restaurant Division?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedication to culinary excellence and professional service makes us the preferred choice for discerning clients.
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
            Let's Make Your Event Exceptional
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll">
            Contact our Restaurant Division today to start planning your next event. Our team is ready 
            to create a customized catering solution that will exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4">
                Plan Your Event
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

export default RestaurantDivision;