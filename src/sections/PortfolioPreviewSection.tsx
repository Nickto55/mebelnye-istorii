import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Maximize } from 'lucide-react';
import type { Page } from '../App';

interface PortfolioPreviewSectionProps {
  onNavigate: (page: Page) => void;
}

const projects = [
  {
    id: 1,
    title: 'Кухня в скандинавском стиле',
    location: 'Москва, ЖК "Скандинавия"',
    area: '12 м²',
    price: '485 000 ₽',
    image: '/portfolio-1.jpg',
    tags: ['Кухня', 'Скандинавский'],
  },
  {
    id: 2,
    title: 'Гардеробная комната',
    location: 'Москва, ЖК "Башня на набережной"',
    area: '18 м²',
    price: '720 000 ₽',
    image: '/portfolio-2.jpg',
    tags: ['Гардеробная', 'Модерн'],
  },
  {
    id: 3,
    title: 'Гостиная с медиастеной',
    location: 'Москва, ЖК "Сити"',
    area: '24 м²',
    price: '650 000 ₽',
    image: '/portfolio-3.jpg',
    tags: ['Гостиная', 'Минимализм'],
  },
  {
    id: 4,
    title: 'Кухня с островом',
    location: 'Москва, ЖК "Зиларт"',
    area: '16 м²',
    price: '890 000 ₽',
    image: '/portfolio-4.jpg',
    tags: ['Кухня', 'Неоклассика'],
  },
];

export function PortfolioPreviewSection({ onNavigate }: PortfolioPreviewSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span 
              className={`inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Портфолио
            </span>
            <h2 
              className={`text-4xl md:text-5xl text-[#2D2D2D] transition-all duration-600 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Наши работы
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('portfolio')}
            className={`mt-4 md:mt-0 flex items-center gap-2 text-[#7D8B7A] hover:text-[#6A7868] transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Смотреть все проекты
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#2D2D2D]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <Maximize className="w-6 h-6 text-[#2D2D2D]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-xl text-[#2D2D2D] font-medium mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-[#6B6B6B] mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    {project.area}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#E0DCD6]">
                  <span className="text-[#B8956B] font-semibold text-lg">
                    {project.price}
                  </span>
                  <button 
                    onClick={() => onNavigate('portfolio')}
                    className="text-[#7D8B7A] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
