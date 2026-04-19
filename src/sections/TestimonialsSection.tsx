import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Page } from '../App';

interface TestimonialsSectionProps {
  onNavigate: (page: Page) => void;
}

const testimonials = [
  {
    id: 1,
    name: 'Анна и Сергей Петровы',
    role: 'Владельцы квартиры в ЖК "Скандинавия"',
    avatar: 'АП',
    rating: 5,
    text: 'Заказывали кухню в скандинавском стиле. Остались полностью довольны результатом! Команда профессионалов — от дизайнера до сборщиков. Всё сделано в срок, качество на высоте. Особенно понравился подход к деталям и внимание к нашим пожеланиям.',
    project: 'Кухня 14 м²',
    date: 'март 2024',
  },
  {
    id: 2,
    name: 'Михаил Волков',
    role: 'Владелец апартаментов в Москва-Сити',
    avatar: 'МВ',
    rating: 5,
    text: 'Работали с KORPUS MEBEL по рекомендации друзей и не пожалели. Гардеробная получилась просто шикарной! Много внимания уделили планировке и функциональности. Цена оказалась даже ниже, чем у конкурентов, а качество — выше.',
    project: 'Гардеробная 20 м²',
    date: 'февраль 2024',
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    role: 'Дизайнер интерьера',
    avatar: 'ЕС',
    rating: 5,
    text: 'Как дизайнер, я очень требовательна к качеству мебели. KORPUS MEBEL — одна из немногих компаний, которая соответствует моим стандартам. Работаю с ними уже третий год, все клиенты довольны. Рекомендую!',
    project: 'Множество проектов',
    date: 'январь 2024',
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    role: 'Владелец загородного дома',
    avatar: 'ДК',
    rating: 5,
    text: 'Заказывали мебель для всего дома — кухню, гардеробные, гостиную, кабинет. Всё выполнено в едином стиле, идеально вписалось в интерьер. Сборщики аккуратные, всё убрали после себя. Отдельное спасибо за терпение к нашим правкам!',
    project: 'Полный фурнитур дома',
    date: 'декабрь 2023',
  },
];

export function TestimonialsSection({ onNavigate }: TestimonialsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span 
              className={`inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Отзывы
            </span>
            <h2 
              className={`text-4xl md:text-5xl text-[#2D2D2D] transition-all duration-600 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Что говорят клиенты
            </h2>
          </div>
          <div 
            className={`flex gap-2 mt-4 md:mt-0 transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-[#E0DCD6] flex items-center justify-center hover:bg-[#7D8B7A] hover:border-[#7D8B7A] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[#E0DCD6] flex items-center justify-center hover:bg-[#7D8B7A] hover:border-[#7D8B7A] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div 
          className={`relative overflow-hidden transition-all duration-600 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div 
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-0 md:px-4"
              >
                <div className="bg-[#F6F4F1] rounded-3xl p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left - Avatar & Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#7D8B7A] flex items-center justify-center text-white text-xl font-medium">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="text-[#2D2D2D] font-medium">{testimonial.name}</h4>
                          <p className="text-[#6B6B6B] text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#B8956B] text-[#B8956B]" />
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[#6B6B6B]">
                        <span className="px-3 py-1 bg-white rounded-full">{testimonial.project}</span>
                        <span>{testimonial.date}</span>
                      </div>
                    </div>

                    {/* Right - Quote */}
                    <div className="lg:w-2/3 relative">
                      <Quote className="absolute -top-2 -left-2 w-12 h-12 text-[#7D8B7A]/20" />
                      <p className="text-[#2D2D2D] text-lg leading-relaxed pl-8">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-[#7D8B7A]' : 'w-2 bg-[#E0DCD6]'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-600 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button 
            onClick={() => onNavigate('reviews')}
            className="btn-secondary"
          >
            СМОТРЕТЬ ВСЕ ОТЗЫВЫ
          </button>
        </div>
      </div>
    </section>
  );
}
