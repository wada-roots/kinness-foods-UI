import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
import bakeryImage from '@/assets/bakery-division.jpg';
import restaurantImage from '@/assets/restaurant-division.jpg';
import factoryImage from '@/assets/factory-division.jpg';
import consultingImage from '@/assets/consulting-division.jpg';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroBackground,
      title: 'Quality Food Solutions',
      subtitle: 'Excellence Across Four Divisions',
      description: 'From artisanal bakery products to comprehensive consulting services, Kinness Foods Limited delivers excellence across four specialized divisions.',
      primaryCTA: 'Explore Our Services',
      secondaryCTA: 'Contact Us Today'
    },
    {
      image: bakeryImage,
      title: 'Artisanal Bakery',
      subtitle: 'Fresh Daily Production',
      description: 'Traditional craftsmanship meets modern efficiency in our bakery division, producing premium breads and pastries for institutional clients.',
      primaryCTA: 'View Bakery Services',
      secondaryCTA: 'Request Quote',
      link: '/divisions/bakery'
    },
    {
      image: restaurantImage,
      title: 'Premium Catering',
      subtitle: 'Memorable Event Experiences',
      description: 'Professional catering services for corporate events, weddings, and special occasions with exceptional quality and presentation.',
      primaryCTA: 'Plan Your Event',
      secondaryCTA: 'View Menu Options',
      link: '/divisions/restaurant'
    },
    {
      image: factoryImage,
      title: 'Advanced Processing',
      subtitle: 'Innovation & Technology',
      description: 'State-of-the-art food processing facilities with R&D capabilities and product innovation for the modern food industry.',
      primaryCTA: 'Discover Innovation',
      secondaryCTA: 'Learn More',
      link: '/divisions/factory'
    },
    {
      image: consultingImage,
      title: 'Expert Consulting',
      subtitle: 'MSME Business Support',
      description: 'Strategic consulting services designed to help small and medium enterprises thrive in the competitive food industry.',
      primaryCTA: 'Get Consultation',
      secondaryCTA: 'View Services',
      link: '/divisions/consulting'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out parallax-bg ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-up drop-shadow-2xl">
                {slide.title}
                <span className="block text-accent drop-shadow-xl">{slide.subtitle}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed animate-fade-in drop-shadow-lg">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                <Link to={slide.link || '/divisions'}>
                  <Button size="lg" className="btn-hero text-lg px-8 py-4">
                    {slide.primaryCTA}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm text-lg px-8 py-4">
                    {slide.secondaryCTA}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-primary-foreground/20 hover:bg-primary-foreground/40 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-primary-foreground/20 hover:bg-primary-foreground/40 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary-foreground scale-125'
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-foreground/20 z-20">
        <div
          className="h-full bg-gradient-hero transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;