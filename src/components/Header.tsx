import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isScrolled: boolean;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'КАТАЛОГ', page: 'catalog' },
  { label: 'ПОРТФОЛИО', page: 'portfolio' },
  { label: 'КАЛЬКУЛЯТОР', page: 'custom-order' },
  { label: 'О НАС', page: 'materials' },
  { label: 'КОНТАКТЫ', page: 'contacts' },
];

export function Header({ currentPage, onNavigate, isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2"
          >
            <span 
              className={`font-serif text-2xl font-semibold tracking-tight transition-colors ${
                isScrolled ? 'text-[#2D2D2D]' : 'text-white'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              KORPUS MEBEL
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-[#2D2D2D] hover:text-[#7D8B7A]' 
                    : 'text-white/90 hover:text-white'
                } ${currentPage === item.page ? 'text-[#7D8B7A]' : ''}`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-[#7D8B7A]' : 'bg-white'
                  } ${currentPage === item.page ? 'w-full' : ''}`}
                />
              </button>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+74951234567" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-[#2D2D2D]' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              +7 (495) 123-45-67
            </a>
            <button 
              onClick={() => handleNavClick('custom-order')}
              className="btn-primary text-xs py-3 px-6"
            >
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#2D2D2D]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-400 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`text-left text-lg font-medium py-3 border-b border-[#E0DCD6] transition-colors ${
                currentPage === item.page ? 'text-[#7D8B7A]' : 'text-[#2D2D2D]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-6">
            <a 
              href="tel:+74951234567" 
              className="flex items-center gap-2 text-[#2D2D2D] mb-4"
            >
              <Phone className="w-5 h-5" />
              +7 (495) 123-45-67
            </a>
            <button 
              onClick={() => handleNavClick('custom-order')}
              className="btn-primary w-full"
            >
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
