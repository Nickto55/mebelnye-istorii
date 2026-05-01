import { Truck, Package, Wrench, Shield, MapPin, Check } from 'lucide-react';
import type { Page } from '../App';

interface DeliveryPageProps {
  onNavigate: (page: Page) => void;
}

const services = [
  {
    icon: Truck,
    title: 'Доставка',
    description: 'Доставляем мебель по Санкт-Петербургу. Также работаем с другими регионами России.',
    details: [
      'Санкт-Петербург — от 3 500 ₽',
      'Ленинградская область — от 5 000 ₽',
      'Другие регионы — по запросу',
    ],
  },
  {
    icon: Package,
    title: 'Подъём на этаж',
    description: 'Аккуратный подъём мебели на любой этаж. Работаем с грузовыми лифтами и лестничными пролётами.',
    details: [
      'Лифт — бесплатно',
      'Ручной подъём — от 150 ₽/этаж',
      'Сложные габариты — индивидуально',
    ],
  },
  {
    icon: Wrench,
    title: 'Сборка',
    description: 'Профессиональная сборка мебели опытными мастерами. Гарантируем качество работы.',
    details: [
      'Кухня — от 8 000 ₽',
      'Шкаф-купе — от 5 500 ₽',
      'Гардеробная — от 9 000 ₽',
    ],
  },
];

const timeline = [
  {
    step: '1',
    title: 'Замер',
    duration: '1-4 дня',
    description: 'Выезд специалиста на объект для точных замеров',
  },
  {
    step: '2',
    title: 'Проектирование',
    duration: '3-5 дней',
    description: 'Разработка дизайн-проекта и согласование',
  },
  {
    step: '3',
    title: 'Производство',
    duration: '12-45 рабочих дней',
    description: 'Изготовление мебели на нашем производстве',
  },
  {
    step: '4',
    title: 'Доставка и сборка',
    duration: '1-4 дня',
    description: 'Доставка и профессиональная сборка',
  },
];

const coverage = [
  'Санкт-Петербург',
  'Ленинградская область',
  'Другие регионы РФ (по запросу)',
];

export function DeliveryPage({ onNavigate }: DeliveryPageProps) {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4">
            Услуги
          </span>
          <h1 
            className="text-4xl md:text-5xl text-[#2D2D2D] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Доставка и сборка
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            Предоставляем полный комплекс услуг по доставке и сборке мебели. 
            Работаем аккуратно, быстро и с гарантией качества.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-[#7D8B7A] flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 
                className="text-xl text-[#2D2D2D] font-medium mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-[#7D8B7A]" />
                    <span className="text-[#2D2D2D]">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 
            className="text-3xl text-[#2D2D2D] mb-8 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Сроки выполнения заказа
          </h2>
          
          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#7D8B7A] flex items-center justify-center text-white font-medium">
                      {item.step}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="hidden lg:block absolute left-14 top-6 w-full h-px bg-[#E0DCD6]" />
                    )}
                  </div>
                  <h3 
                    className="text-lg text-[#2D2D2D] font-medium mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-[#B8956B]/10 text-[#B8956B] rounded-full text-xs font-medium mb-3">
                    {item.duration}
                  </span>
                  <p className="text-[#6B6B6B] text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage & Guarantee */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coverage */}
          <div className="bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-[#7D8B7A]" />
              <h3 
                className="text-xl text-[#2D2D2D] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                География работы
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {coverage.map((region) => (
                <span 
                  key={region}
                  className="px-4 py-2 bg-[#F6F4F1] rounded-full text-sm text-[#2D2D2D]"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-[#2D2D2D] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#B8956B]" />
              <h3 
                className="text-xl font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Гарантия на сборку
              </h3>
            </div>
            <p className="text-white/70 mb-4">
              Предоставляем гарантию на все работы по сборке и установке мебели. 
              В случае выявления дефектов — устраняем бесплатно.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-[#B8956B]">12</span>
              <span className="text-white/70">месяцев гарантии<br />на сборку</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => onNavigate('custom-order')}
            className="btn-primary"
          >
            РАССЧИТАТЬ СТОИМОСТЬ ДОСТАВКИ
          </button>
        </div>
      </div>
    </div>
  );
}
