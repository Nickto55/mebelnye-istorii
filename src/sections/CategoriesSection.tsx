import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Page } from '../App';

interface CategoriesSectionProps {
  onNavigate: (page: Page) => void;
}

const categories = [
  {
    id: 'kitchen',
    title: 'Кухни',
    description: 'От классики до модерна',
    image: '/category-kitchen.jpg',
    count: '124 проекта',
  },
  {
    id: 'wardrobe',
    title: 'Шкафы',
    description: 'Встроенные и корпусные',
    image: '/category-wardrobe.jpg',
    count: '89 проектов',
  },
  {
    id: 'living',
    title: 'Гостиные',
    description: 'Стенки и стеллажи',
    image: '/category-living.jpg',
    count: '56 проектов',
  },
  {
    id: 'bathroom',
    title: 'Ванные',
    description: 'Тумбы и шкафчики',
    image: '/category-bathroom.jpg',
    count: '43 проекта',
  },
  {
    id: 'office',
    title: 'Кабинеты',
    description: 'Рабочие зоны',
    image: '/category-office.jpg',
    count: '38 проектов',
  },
  {
    id: 'hallway',
    title: 'Прихожие',
    description: 'Мебель для входной зоны',
    image: '/category-hallway.jpg',
    count: '67 проектов',
  },
];

export function CategoriesSection({ onNavigate }: CategoriesSectionProps) {
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
              Каталог
            </span>
            <h2 
              className={`text-4xl md:text-5xl text-[#2D2D2D] transition-all duration-600 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Наши услуги
            </h2>
          </div>
          <p 
            className={`text-[#6B6B6B] max-w-md mt-4 md:mt-0 transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Изготавливаем мебель любой сложности для всех помещений вашего дома
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onNavigate('catalog')}
              className={`group relative aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div className="text-left">
                    <span className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      {category.count}
                    </span>
                    <h3 
                      className="text-white text-2xl font-medium mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {category.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {category.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`mt-12 text-center transition-all duration-600 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button 
            onClick={() => onNavigate('catalog')}
            className="btn-secondary"
          >
            СМОТРЕТЬ ВЕСЬ КАТАЛОГ
          </button>
        </div>
      </div>
    </section>
  );
}
