import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, User, MessageSquare } from 'lucide-react';


export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        <div 
          className={`bg-[#7D8B7A] rounded-3xl overflow-hidden transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 lg:p-12 xl:p-16">
              <span className="inline-block text-white/70 text-sm uppercase tracking-[0.2em] mb-4">
                Бесплатная консультация
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Получите расчёт стоимости вашего проекта
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут. 
                Обсудим ваши пожелания, ответим на вопросы и подготовим предварительный расчёт.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Позвоните нам</p>
                    <a href="tel:+74951234567" className="text-lg font-medium hover:text-white/80 transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Напишите нам</p>
                    <a href="mailto:info@korpusmebel.ru" className="text-lg font-medium hover:text-white/80 transition-colors">
                      info@korpusmebel.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-12 xl:p-16">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium mb-2">Спасибо за заявку!</h3>
                  <p className="text-white/80">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Ваше имя</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Телефон</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email (необязательно)</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.ru"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Сообщение</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажите о вашем проекте..."
                        rows={4}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-[#7D8B7A] font-medium uppercase tracking-wider rounded-xl hover:bg-white/90 transition-colors"
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                  </button>
                  <p className="text-white/50 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
