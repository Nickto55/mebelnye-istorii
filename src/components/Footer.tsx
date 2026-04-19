import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';
import type { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="container-custom mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              KORPUS MEBEL
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Производство мебели на заказ с 2010 года. 
              Индивидуальный дизайн, премиальные материалы, 
              гарантия качества.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7D8B7A] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7D8B7A] transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Навигация
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Каталог', page: 'catalog' as Page },
                { label: 'Портфолио', page: 'portfolio' as Page },
                { label: 'Материалы', page: 'materials' as Page },
                { label: 'Доставка и сборка', page: 'delivery' as Page },
                { label: 'Отзывы', page: 'reviews' as Page },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Услуги
            </h4>
            <ul className="space-y-3">
              {[
                'Кухни на заказ',
                'Шкафы-купе',
                'Гардеробные',
                'Гостиные',
                'Прихожие',
                'Ванные комнаты',
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+74951234567"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#7D8B7A]" />
                  <span>+7 (495) 123-45-67</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@korpusmebel.ru"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#7D8B7A]" />
                  <span>info@korpusmebel.ru</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-[#7D8B7A] flex-shrink-0 mt-0.5" />
                  <span>г. Москва, ул. Дизайнерская, 15<br />Бизнес-центр "Корпус"</span>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-white/50 text-xs">
                Пн-Пт: 9:00 - 19:00<br />
                Сб: 10:00 - 16:00<br />
                Вс: выходной
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 KORPUS MEBEL. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <button className="hover:text-white transition-colors">
              Политика конфиденциальности
            </button>
            <button className="hover:text-white transition-colors">
              Договор оферты
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
