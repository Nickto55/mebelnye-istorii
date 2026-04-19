import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, MessageCircle } from 'lucide-react';

export function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4">
            Свяжитесь с нами
          </span>
          <h1 
            className="text-4xl md:text-5xl text-[#2D2D2D] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Контакты
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы. Выберите удобный способ связи 
            или приезжайте к нам в шоурум.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#7D8B7A]/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#7D8B7A]" />
                </div>
                <h3 
                  className="text-lg text-[#2D2D2D] font-medium mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Телефон
                </h3>
                <a 
                  href="tel:+74951234567" 
                  className="text-[#2D2D2D] hover:text-[#7D8B7A] transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#7D8B7A]/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#7D8B7A]" />
                </div>
                <h3 
                  className="text-lg text-[#2D2D2D] font-medium mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Email
                </h3>
                <a 
                  href="mailto:info@korpusmebel.ru" 
                  className="text-[#2D2D2D] hover:text-[#7D8B7A] transition-colors"
                >
                  info@korpusmebel.ru
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#7D8B7A]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#7D8B7A]" />
                </div>
                <h3 
                  className="text-lg text-[#2D2D2D] font-medium mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Адрес
                </h3>
                <p className="text-[#2D2D2D]">
                  г. Москва, ул. Дизайнерская, 15<br />
                  Бизнес-центр "Корпус"
                </p>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#7D8B7A]/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#7D8B7A]" />
                </div>
                <h3 
                  className="text-lg text-[#2D2D2D] font-medium mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Режим работы
                </h3>
                <p className="text-[#2D2D2D]">
                  Пн-Пт: 9:00 — 19:00<br />
                  Сб: 10:00 — 16:00
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6">
              <h3 
                className="text-lg text-[#2D2D2D] font-medium mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Мы в соцсетях
              </h3>
              <div className="flex gap-4">
                <a 
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 bg-[#F6F4F1] rounded-xl hover:bg-[#7D8B7A] hover:text-white transition-colors group"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 bg-[#F6F4F1] rounded-xl hover:bg-[#7D8B7A] hover:text-white transition-colors group"
                >
                  <Send className="w-5 h-5" />
                  <span className="text-sm font-medium">Telegram</span>
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 bg-[#F6F4F1] rounded-xl hover:bg-[#7D8B7A] hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 
              className="text-2xl text-[#2D2D2D] font-medium mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Напишите нам
            </h3>
            <p className="text-[#6B6B6B] mb-6">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#7D8B7A]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#7D8B7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl text-[#2D2D2D] font-medium mb-2">Спасибо за сообщение!</h4>
                <p className="text-[#6B6B6B]">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-[#6B6B6B] mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full p-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#6B6B6B] mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full p-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#6B6B6B] mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.ru"
                    className="w-full p-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#6B6B6B] mb-2">Сообщение</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="w-full p-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </button>
                <p className="text-[#6B6B6B] text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <div className="bg-[#EDE9E4] rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#7D8B7A] mx-auto mb-4" />
              <p className="text-[#2D2D2D] font-medium mb-2">Карта проезда</p>
              <p className="text-[#6B6B6B] text-sm">г. Москва, ул. Дизайнерская, 15</p>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#7D8B7A] hover:underline"
              >
                Открыть в Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
