'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Heart, ArrowUp, Instagram, Send } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio-data';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'telegram':
        return <Send className="w-5 h-5" />;
      case 'mail':
        return <Mail className="w-5 h-5" />;
      case 'phone':
        return <Phone className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-[var(--background-accent)] border-t border-[var(--border)]">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-[var(--accent)] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container-custom px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {personalInfo.name.split(' ')[0]}
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Mobile Application Developer specializing in native Android development with Clean
              Architecture.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg bg-[var(--background-secondary)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:twodiesdeveloper@gmail.com"
                  className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">twodiesdeveloper@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+99365804101"
                  className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+993 65804101</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[var(--text-secondary)] text-center md:text-left">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-[var(--text-secondary)]">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using</span>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                Next.js
              </a>
              <span>&</span>
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                Framer Motion
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
