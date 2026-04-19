import { useState } from 'react';
import { MapPin, Maximize, Calendar, Check } from 'lucide-react';
import type { Page } from '../App';

interface PortfolioPageProps {
  onNavigate: (page: Page) => void;
}

const filters = [
  { id: 'all', name: 'Все проекты' },
  { id: 'kitchen', name: 'Кухни' },
  { id: 'wardrobe', name: 'Шкафы и гардеробные' },
  { id: 'living', name: 'Гостиные' },
  { id: 'bathroom', name: 'Ванные' },
  { id: 'office', name: 'Кабинеты' },
];

const projects = [
  {
    id: 1,
    title: 'Кухня "Сканди"',
    category: 'kitchen',
    location: 'Москва, ЖК "Скандинавия"',
    area: '12 м²',
    price: '485 000 ₽',
    date: '2024',
    image: '/portfolio-1.jpg',
    materials: ['ЛДСП Egger', 'Фурнитура Blum', 'Столешница Samsung'],
    description: 'Минималистичная кухня в скандинавском стиле с интегрированными ручками и подсветкой рабочей зоны.',
  },
  {
    id: 2,
    title: 'Гардеробная "Люкс"',
    category: 'wardrobe',
    location: 'Москва, ЖК "Башня на набережной"',
    area: '18 м²',
    price: '720 000 ₽',
    date: '2024',
    image: '/portfolio-2.jpg',
    materials: ['ЛДСП Kronospan', 'Фурнитура Hettich', 'Зеркала'],
    description: 'Просторная гардеробная комната с раздвижными дверями и продуманной системой хранения.',
  },
  {
    id: 3,
    title: 'Гостиная "Медиа"',
    category: 'living',
    location: 'Москва, ЖК "Сити"',
    area: '24 м²',
    price: '650 000 ₽',
    date: '2023',
    image: '/portfolio-3.jpg',
    materials: ['МДФ эмаль', 'LED-подсветка', 'Шпон дуба'],
    description: 'Современная медиастена с интегрированным хранением и ambient подсветкой.',
  },
  {
    id: 4,
    title: 'Кухня "Прованс"',
    category: 'kitchen',
    location: 'Москва, ЖК "Зиларт"',
    area: '16 м²',
    price: '890 000 ₽',
    date: '2024',
    image: '/portfolio-4.jpg',
    materials: ['МДФ эмаль', 'Фурнитура Blum', 'Столешница Caesarstone'],
    description: 'Кухня в стиле прованс с островом и встроенной бытовой техникой премиум-класса.',
  },
  {
    id: 5,
    title: 'Шкаф-купе "Модерн"',
    category: 'wardrobe',
    location: 'Москва, ЖК "Фили"',
    area: '8 м²',
    price: '320 000 ₽',
    date: '2023',
    image: '/portfolio-5.jpg',
    materials: ['ЛДСП Egger', 'Зеркала', 'Фурнитура Hettich'],
    description: 'Встроенный шкаф-купе с зеркальными дверями и внутренней подсветкой.',
  },
  {
    id: 6,
    title: 'Кабинет "Офис"',
    category: 'office',
    location: 'Москва, ЖК "Пресня"',
    area: '14 м²',
    price: '420 000 ₽',
    date: '2024',
    image: '/portfolio-6.jpg',
    materials: ['Шпон ореха', 'МДФ эмаль', 'LED-подсветка'],
    description: 'Домашний кабинет с встроенным рабочим местом и книжными полками.',
  },
];

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4">
            Наши работы
          </span>
          <h1 
            className="text-4xl md:text-5xl text-[#2D2D2D] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Портфолио
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            Реальные проекты для реальных клиентов. Каждая работа — это история 
            сотрудничества и воплощение мечты в реальность.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#7D8B7A] text-white'
                  : 'bg-white text-[#2D2D2D] hover:bg-[#EDE9E4]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-3 bg-white text-[#2D2D2D] rounded-full font-medium hover:bg-[#7D8B7A] hover:text-white transition-colors"
                  >
                    Подробнее о проекте
                  </button>
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
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B6B6B] mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    {project.area}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#E0DCD6]">
                  <span className="text-[#B8956B] font-semibold text-lg">{project.price}</span>
                  <button
                    onClick={() => onNavigate('custom-order')}
                    className="text-[#7D8B7A] text-sm font-medium hover:text-[#6A7868] transition-colors"
                  >
                    Хочу так же →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#6B6B6B]">В данной категории пока нет проектов</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h2 
                className="text-3xl text-[#2D2D2D] font-medium mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {selectedProject.title}
              </h2>
              <p className="text-[#6B6B6B] mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-[#F6F4F1] rounded-xl">
                  <p className="text-[#6B6B6B] text-sm mb-1">Площадь</p>
                  <p className="text-[#2D2D2D] font-medium">{selectedProject.area}</p>
                </div>
                <div className="p-4 bg-[#F6F4F1] rounded-xl">
                  <p className="text-[#6B6B6B] text-sm mb-1">Стоимость</p>
                  <p className="text-[#B8956B] font-medium">{selectedProject.price}</p>
                </div>
                <div className="p-4 bg-[#F6F4F1] rounded-xl">
                  <p className="text-[#6B6B6B] text-sm mb-1">Год</p>
                  <p className="text-[#2D2D2D] font-medium">{selectedProject.date}</p>
                </div>
                <div className="p-4 bg-[#F6F4F1] rounded-xl">
                  <p className="text-[#6B6B6B] text-sm mb-1">Локация</p>
                  <p className="text-[#2D2D2D] font-medium text-sm">{selectedProject.location}</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[#2D2D2D] font-medium mb-3">Использованные материалы:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materials.map((material) => (
                    <span 
                      key={material}
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#7D8B7A]/10 text-[#7D8B7A] rounded-full text-sm"
                    >
                      <Check className="w-4 h-4" />
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onNavigate('custom-order');
                }}
                className="w-full btn-primary"
              >
                ЗАКАЗАТЬ ПОХОЖИЙ ПРОЕКТ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
