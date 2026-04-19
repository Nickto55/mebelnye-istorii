import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import type { Page } from '../App';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

const slides = [
  {
    image: '/hero-kitchen.jpg',
    subtitle: 'Мебель на заказ',
    title: 'КУХНИ МЕЧТЫ\nПО ИНДИВИДУАЛЬНОМУ\nПРОЕКТУ',
    description: 'Создаём кухни, в которых хочется готовить. От классики до минимализма — любой стиль под ваш интерьер.',
  },
  {
    image: '/hero-wardrobe.jpg',
    subtitle: 'Гардеробные системы',
    title: 'ШКАФЫ И\nГАРДЕРОБНЫЕ\nНА ЗАКАЗ',
    description: 'Максимум функциональности в минимуме пространства. Продуманная организация хранения.',
  },
  {
    image: '/hero-living.jpg',
    subtitle: 'Гостиные и стенки',
    title: 'ГОСТИНЫЕ\nС ИНТЕГРИРОВАННЫМ\nХРАНЕНИЕМ',
    description: 'Современные решения для вашей гостиной. Встроенная техника и продуманное освещение.',
  },
  {
    image: '/hero-bathroom.jpg',
    subtitle: 'Ванные комнаты',
    title: 'МЕБЕЛЬ ДЛЯ\nВАННОЙ\nПОД ЗАКАЗ',
    description: 'Влагостойкие материалы и идеальная эргономика для вашей ванной комнаты.',
  },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-800 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[8000ms]"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container-custom mx-auto section-padding flex items-center">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-600 ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8 absolute pointer-events-none'
              }`}
            >
              <span className="inline-block text-white/80 text-sm uppercase tracking-[0.2em] mb-4 animate-fade-in">
                {slide.subtitle}
              </span>
              <h1 
                className="text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 whitespace-pre-line"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {slide.title}
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => onNavigate('custom-order')}
                  className="btn-primary"
                >
                  ЗАПИСАТЬСЯ НА ЗАМЕР
                </button>
                <button 
                  onClick={() => onNavigate('custom-order')}
                  className="btn-outline-white"
                >
                  РАССЧИТАТЬ СТОИМОСТЬ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Panel */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h4 className="text-[#2D2D2D] font-medium mb-4 text-sm uppercase tracking-wider">
              Быстрые ссылки
            </h4>
            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('portfolio')}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-[#F6F4F1] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img 
                    src="/portfolio-1.jpg" 
                    alt="Портфолио" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[#2D2D2D] font-medium text-sm">Портфолио</p>
                  <p className="text-[#6B6B6B] text-xs">Наши работы</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7D8B7A] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={() => onNavigate('materials')}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-[#F6F4F1] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden flex">
                  <div className="w-1/2 bg-[#7D8B7A]" />
                  <div className="w-1/2 bg-[#E0DCD6]" />
                </div>
                <div className="text-left">
                  <p className="text-[#2D2D2D] font-medium text-sm">Материалы</p>
                  <p className="text-[#6B6B6B] text-xs">Каталог декоров</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7D8B7A] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-4 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-wider">Листайте вниз</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
