import { useEffect, useRef, useState } from 'react';
import { Ruler, Palette, Hammer, Shield, Clock, Award } from 'lucide-react';

const advantages = [
  {
    icon: Ruler,
    title: 'Точный замер',
    description: 'Выезд замерщика в удобное время с образцами материалов',
  },
  {
    icon: Palette,
    title: 'Индивидуальный дизайн',
    description: 'Разработка проекта с учётом всех ваших пожеланий',
  },
  {
    icon: Hammer,
    title: 'Собственное производство',
    description: 'Современное оборудование и опытные мастера',
  },
  {
    icon: Shield,
    title: 'Гарантия 5 лет',
    description: 'Полная гарантия на всю мебель и фурнитуру',
  },
  {
    icon: Clock,
    title: 'Сроки производства',
    description: 'От 14 до 45 дней в зависимости от сложности',
  },
  {
    icon: Award,
    title: 'Премиальные материалы',
    description: 'ЛДСП Egger, Kronospan, фурнитура Blum, Hettich',
  },
];

const stats = [
  { value: '14+', label: 'лет опыта' },
  { value: '500+', label: 'выполненных проектов' },
  { value: '98%', label: 'довольных клиентов' },
  { value: '5', label: 'лет гарантии' },
];

export function AdvantagesSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Почему мы
          </span>
          <h2 
            className={`text-4xl md:text-5xl text-[#2D2D2D] transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Наши преимущества
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`group p-8 rounded-2xl bg-[#F6F4F1] hover:bg-[#7D8B7A] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#7D8B7A] group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                <advantage.icon className="w-7 h-7 text-white" />
              </div>
              <h3 
                className="text-xl text-[#2D2D2D] group-hover:text-white font-medium mb-3 transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {advantage.title}
              </h3>
              <p className="text-[#6B6B6B] group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:p-12 rounded-3xl bg-[#2D2D2D] transition-all duration-600 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center"
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
            >
              <div 
                className="text-4xl lg:text-5xl text-[#B8956B] font-medium mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
