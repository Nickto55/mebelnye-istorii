import { useState } from 'react';
import { Check } from 'lucide-react';
import type { Page } from '../App';

interface MaterialsPageProps {
  onNavigate: (page: Page) => void;
}

const materials = [
  {
    id: 'ldsp',
    name: 'ЛДСП',
    fullName: 'Ламинированная древесно-стружечная плита',
    description: 'Самый популярный материал для корпусной мебели. Прочный, долговечный, доступный по цене.',
    brands: ['Egger', 'Kronospan','ЧФМК', 'Lamarty'],
    colors: ['Белый', 'Бежевый', 'Капучино, 'Кашемир', 'Серый'],
    price: 'от 15 000 ₽/м²',
    features: ['Влагостойкий', 'Устойчив к царапинам', 'Легко чистить'],
  },
  {
    id: 'mdf',
    name: 'МДФ',
    fullName: 'Мелкодисперсная фракция',
    description: 'Идеален для фасадов с фрезеровкой и покраской. Гладкая поверхность без пор.',
    brands: ['Kronospan', 'SwissPan', 'ЛесПлитИнвест'],
    colors: ['Любой по RAL', 'Белый матовый', 'Серый матовый'],
    price: 'от 25 000 ₽/м²',
    features: ['Идеально гладкая поверхность', 'Любой цвет', 'Фрезеровка'],
  },
  {
    id: 'veneer',
    name: 'Шпон',
    fullName: 'Натуральный шпон',
    description: 'Натуральный материал с уникальной текстурой дерева. Премиальный вид и ощущения.',
    brands: ['Alpi', 'Tabu', 'Джеймс Лотам'],
    colors: ['Дуб', 'Орех', 'Ясень', 'Венге', 'Махагон'],
    price: 'от 45 000 ₽/м²',
    features: ['Натуральное дерево', 'Уникальная текстура', 'Экологичность'],
  },
  {
    id: 'solid',
    name: 'Массив',
    fullName: 'Массив дерева',
    description: 'Самый премиальный материал. Натуральное дерево, которое служит десятилетиями.',
    brands: ['Местные поставщики'],
    colors: ['Дуб', 'Бук', 'Ясень', 'Орех', 'Сосна'],
    price: 'от 75 000 ₽/м²',
    features: ['Долговечность', 'Можно реставрировать', 'Уникальный характер'],
  },
];

const hardware = [
  {
    name: 'Blum',
    country: 'Австрия',
    description: 'Мировой лидер в производстве мебельной фурнитуры. Пожизненная гарантия на петли и направляющие.',
    logo: 'BLUM',
  },
  {
    name: 'Hettich',
    country: 'Германия',
    description: 'Немецкое качество и надёжность. Инновационные решения для раздвижных систем.',
    logo: 'HETTICH',
  },
  {
    name: 'Grass',
    country: 'Австрия',
    description: 'Премиальная фурнитура для требовательных клиентов. Бесшумное и плавное закрывание.',
    logo: 'GRASS',
  },
  {
    name: 'Hafele',
    country: 'Германия',
    description: 'Полный ассортимент мебельной фурнитуры и аксессуаров. Решения для любых задач.',
    logo: 'HAFELE',
  },
  {
    name: 'Unihopper',
    country: 'Китай',
    description: 'Качественная фурнитура, большой выбор, бюджетные цены.',
    logo: 'UNIHOPPER',
  },
];

export function MaterialsPage({ onNavigate }: MaterialsPageProps) {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4">
            Качество
          </span>
          <h1 
            className="text-4xl md:text-5xl text-[#2D2D2D] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Материалы и фурнитура
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            Мы работаем только с проверенными поставщиками материалов и фурнитуры. 
            Гарантируем качество и долговечность каждого изделия.
          </p>
        </div>

        {/* Materials Section */}
        <div className="mb-20">
          <h2 
            className="text-3xl text-[#2D2D2D] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Материалы корпуса и фасадов
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Material List */}
            <div className="lg:col-span-1 space-y-3">
              {materials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => setSelectedMaterial(material)}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    selectedMaterial.id === material.id
                      ? 'bg-[#7D8B7A] text-white'
                      : 'bg-white text-[#2D2D2D] hover:bg-[#EDE9E4]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{material.name}</span>
                    <span className={`text-sm ${
                      selectedMaterial.id === material.id ? 'text-white/70' : 'text-[#6B6B6B]'
                    }`}>
                      {material.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Material Details */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 
                    className="text-2xl text-[#2D2D2D] font-medium mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {selectedMaterial.name}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm">{selectedMaterial.fullName}</p>
                </div>
                <span className="text-[#B8956B] font-semibold text-lg">{selectedMaterial.price}</span>
              </div>

              <p className="text-[#2D2D2D] mb-6">{selectedMaterial.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-[#6B6B6B] mb-2">Производители:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedMaterial.brands.map((brand) => (
                      <span key={brand} className="px-3 py-1 bg-[#F6F4F1] rounded-full text-sm">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] mb-2">Популярные цвета:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedMaterial.colors.map((color) => (
                      <span key={color} className="px-3 py-1 bg-[#F6F4F1] rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#6B6B6B] mb-3">Преимущества:</p>
                <div className="flex flex-wrap gap-3">
                  {selectedMaterial.features.map((feature) => (
                    <span 
                      key={feature}
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#7D8B7A]/10 text-[#7D8B7A] rounded-full text-sm"
                    >
                      <Check className="w-4 h-4" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Section */}
        <div>
          <h2 
            className="text-3xl text-[#2D2D2D] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Фурнитура
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hardware.map((item) => (
              <div 
                key={item.name}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#2D2D2D] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{item.logo}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 
                        className="text-xl text-[#2D2D2D] font-medium"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.name}
                      </h3>
                      <span className="px-2 py-0.5 bg-[#F6F4F1] rounded text-xs text-[#6B6B6B]">
                        {item.country}
                      </span>
                    </div>
                    <p className="text-[#6B6B6B] text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#7D8B7A] rounded-3xl p-8 lg:p-12">
            <h3 
              className="text-2xl lg:text-3xl text-white font-medium mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Не знаете, какой материал выбрать?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Наши дизайнеры помогут подобрать оптимальное решение под ваш бюджет и задачи
            </p>
            <button 
              onClick={() => onNavigate('custom-order')}
              className="bg-white text-[#7D8B7A] px-8 py-4 rounded-lg font-medium uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
