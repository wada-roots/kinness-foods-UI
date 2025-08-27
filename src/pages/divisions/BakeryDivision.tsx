import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Award, ShoppingBasket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import bakeryImage from '@/assets/bakery-division.jpg';
import freshBakingImage from '@/assets/services/fresh-daily-baking.jpg';
import customOrdersImage from '@/assets/services/custom-orders.jpg';
import artisanalBreadImage from '@/assets/services/artisanal-bread-varieties.jpg';
import premiumPastriesImage from '@/assets/services/premium-pastries-desserts.jpg';

const BakeryDivision = () => {
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
      title: 'Fresh Daily Baking',
      description: 'Artisanal breads and pastries baked fresh every morning using traditional techniques.',
      features: ['Sourdough Varieties', 'Whole Grain Options', 'Gluten-Free Alternatives', 'Custom Recipes'],
      image: freshBakingImage
    },
    {
      title: 'Custom Institutional Orders',
      description: 'Large-scale baking solutions tailored for schools, hospitals, and corporate clients.',
      features: ['Bulk Production', 'Scheduled Deliveries', 'Custom Packaging', 'Nutritional Analysis'],
      image: customOrdersImage
    },
    {
      title: 'Artisanal Bread Varieties',
      description: 'Traditional and specialty breads crafted with time-honored techniques and premium ingredients.',
      features: ['Croissants & Danish', 'Cakes & Cupcakes', 'Seasonal Specialties', 'Custom Decorations'],
      image: artisanalBreadImage
    },
    {
      title: 'Premium Pastries & Desserts',
      description: 'Delicate pastries and desserts made fresh daily by our skilled pastry chefs.',
      features: ['Recipe Development', 'Special Occasions', 'Dietary Accommodations', 'Branded Products'],
      image: premiumPastriesImage
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fresh Daily Production',
      description: 'All products are baked fresh daily using traditional methods and premium ingredients.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control ensures every product meets our high standards of excellence.'
    },
    {
      icon: Users,
      title: 'Experienced Bakers',
      description: 'Our skilled team combines traditional craftsmanship with modern baking techniques.'
    },
    {
      icon: ShoppingBasket,
      title: 'Wide Product Range',
      description: 'From everyday essentials to specialty items, we offer a comprehensive range of baked goods.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Daily Production Capacity' },
    { number: '50+', label: 'Product Varieties' },
    { number: '100+', label: 'Institutional Clients' },
    { number: '24/7', label: 'Production Schedule' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 overflow-hidden parallax-bg"
        style={{
          backgroundImage: `url(${bakeryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-in-up">
            Bakery Division
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in">
            Artisanal breads, premium pastries, and custom institutional supply with traditional craftsmanship 
            and modern efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Products
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
                Crafting Excellence Daily
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Bakery Division represents the heart of traditional baking combined with modern efficiency. 
                Since 2018, we've been providing fresh, high-quality baked goods to institutional clients 
                across Kenya, maintaining the perfect balance between artisanal craftsmanship and 
                large-scale production capabilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From our state-of-the-art facility, we produce a wide range of breads, pastries, and 
                custom baked goods that meet the diverse needs of schools, hospitals, hotels, 
                corporate clients, and special events.
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
                    <ShoppingBasket className="w-8 h-8 mr-3" />
                    Our Commitment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 leading-relaxed mb-4">
                    Every loaf, every pastry, and every custom order receives the same attention to detail 
                    and commitment to quality that has made us a trusted partner in the food industry.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Premium ingredients sourced locally and internationally
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Traditional techniques enhanced by modern technology
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Strict hygiene and quality control standards
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
              Our Bakery Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive baking solutions designed to meet the diverse needs of our institutional and corporate clients.
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
              Why Choose Our Bakery?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the baking industry.
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
            Ready to Experience Our Bakery Excellence?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll">
            Contact us today to discuss your baking needs and discover how our Bakery Division 
            can provide the perfect solution for your institution or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4">
                Request Consultation
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

export default BakeryDivision;