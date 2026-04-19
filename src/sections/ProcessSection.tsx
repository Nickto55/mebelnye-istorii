import { useEffect, useRef, useState } from 'react';
import { Phone, Ruler, PenTool, Factory, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Заявка',
    description: 'Оставьте заявку на сайте или позвоните нам. Обсудим ваши пожелания и ответим на вопросы.',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Замер',
    description: 'Выезд замерщика с образцами материалов. Точные замеры и фотофиксация помещения.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Дизайн-проект',
    description: 'Разработка 3D-визуализации с учётом всех ваших пожеланий и особенностей помещения.',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Производство',
    description: 'Изготовление мебели на современном оборудовании. Контроль качества на каждом этапе.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Доставка и сборка',
    description: 'Аккуратная доставка и профессиональная сборка мебели в удобное для вас время.',
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Гарантия',
    description: 'Предоставляем гарантию 5 лет на всю мебель и фурнитуру. Сервисное обслуживание.',
  },
];

export function ProcessSection() {
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
            Как мы работаем
          </span>
          <h2 
            className={`text-4xl md:text-5xl text-[#2D2D2D] transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Этапы работы
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Number */}
              <div className="absolute -top-4 -left-2 text-7xl font-bold text-[#EDE9E4] select-none z-0">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10 pt-6">
                <div className="w-12 h-12 rounded-xl bg-[#7D8B7A] flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 
                  className="text-xl text-[#2D2D2D] font-medium mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (not on last item of row) */}
              {(index + 1) % 3 !== 0 && index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-[#E0DCD6] -ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
