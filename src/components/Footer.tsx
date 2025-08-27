import { ChefHat, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Bakery Division', path: '/divisions/bakery' },
    { name: 'Restaurant Division', path: '/divisions/restaurant' },
    { name: 'Factory Division', path: '/divisions/factory' },
    { name: 'Consulting Division', path: '/divisions/consulting' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-glow rounded-lg flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="font-playfair font-bold text-xl">
                  Kinness Foods
                </span>
                <div className="text-sm opacity-80 tracking-wide">
                  LIMITED
                </div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Leading provider of quality food solutions since 2018. From artisanal bakery products to comprehensive consulting services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-glow hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-primary-glow transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <div className="text-sm opacity-90">
                  <p>Kinness Foods Limited</p>
                  <p>Corporate Headquarters</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-90">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-90">info@kinnessfoods.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-sm opacity-90 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-glow"
              />
              <button className="w-full px-4 py-2 bg-primary-glow text-primary font-medium rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © {currentYear} Kinness Foods Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;