import { useState } from 'react';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import type { Page } from '../App';

interface CatalogPageProps {
  onNavigate: (page: Page) => void;
}

const categories = [
  { id: 'all', name: 'Все категории' },
  { id: 'kitchen', name: 'Кухни' },
  { id: 'wardrobe', name: 'Шкафы' },
  { id: 'living', name: 'Гостиные' },
  { id: 'bathroom', name: 'Ванные' },
  { id: 'office', name: 'Кабинеты' },
  { id: 'hallway', name: 'Прихожие' },
];

const products = [
  {
    id: 1,
    name: 'Кухня "Сканди"',
    category: 'kitchen',
    price: 'от 285 000 ₽',
    image: '/portfolio-1.jpg',
    description: 'Минималистичная кухня в скандинавском стиле',
  },
  {
    id: 2,
    name: 'Гардеробная "Люкс"',
    category: 'wardrobe',
    price: 'от 450 000 ₽',
    image: '/portfolio-2.jpg',
    description: 'Просторная гардеробная с подсветкой',
  },
  {
    id: 3,
    name: 'Гостиная "Медиа"',
    category: 'living',
    price: 'от 380 000 ₽',
    image: '/portfolio-3.jpg',
    description: 'Стенка с интегрированным хранением',
  },
  {
    id: 4,
    name: 'Кухня "Прованс"',
    category: 'kitchen',
    price: 'от 520 000 ₽',
    image: '/portfolio-4.jpg',
    description: 'Кухня в стиле прованс с островом',
  },
  {
    id: 5,
    name: 'Шкаф-купе "Модерн"',
    category: 'wardrobe',
    price: 'от 180 000 ₽',
    image: '/portfolio-5.jpg',
    description: 'Встроенный шкаф с зеркальными дверями',
  },
  {
    id: 6,
    name: 'Кабинет "Офис"',
    category: 'office',
    price: 'от 240 000 ₽',
    image: '/portfolio-6.jpg',
    description: 'Рабочее место с встроенными полками',
  },
];

export function CatalogPage({ onNavigate }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="mb-12">
          <h1 
            className="text-4xl md:text-5xl text-[#2D2D2D] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Каталог
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl">
            Изучите наше портфолио готовых решений. Каждый проект можно адаптировать 
            под ваши размеры и пожелания.
          </p>
        </div>

        {/* Filters & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#7D8B7A] text-white'
                    : 'bg-white text-[#2D2D2D] hover:bg-[#EDE9E4]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm font-medium text-[#2D2D2D] hover:bg-[#EDE9E4] transition-colors"
            >
              <Filter className="w-4 h-4" />
              Фильтры
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            <div className="flex bg-white rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-[#7D8B7A] text-white' : 'text-[#6B6B6B]'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-[#7D8B7A] text-white' : 'text-[#6B6B6B]'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl p-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Ценовой диапазон</label>
                <select className="w-full p-3 border border-[#E0DCD6] rounded-lg focus:outline-none focus:border-[#7D8B7A]">
                  <option>Любая цена</option>
                  <option>До 300 000 ₽</option>
                  <option>300 000 — 500 000 ₽</option>
                  <option>500 000 — 800 000 ₽</option>
                  <option>От 800 000 ₽</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Стиль</label>
                <select className="w-full p-3 border border-[#E0DCD6] rounded-lg focus:outline-none focus:border-[#7D8B7A]">
                  <option>Любой стиль</option>
                  <option>Скандинавский</option>
                  <option>Минимализм</option>
                  <option>Неоклассика</option>
                  <option>Лофт</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">Материал</label>
                <select className="w-full p-3 border border-[#E0DCD6] rounded-lg focus:outline-none focus:border-[#7D8B7A]">
                  <option>Любой материал</option>
                  <option>ЛДСП</option>
                  <option>МДФ</option>
                  <option>Массив дерева</option>
                  <option>Шпон</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className={`grid ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        } gap-6`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-1/3' : 'aspect-[4/3]'
              }`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 
                  className="text-xl text-[#2D2D2D] font-medium mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-[#6B6B6B] text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#B8956B] font-semibold">{product.price}</span>
                  <button 
                    onClick={() => onNavigate('custom-order')}
                    className="text-[#7D8B7A] text-sm font-medium hover:text-[#6A7868] transition-colors"
                  >
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#6B6B6B]">В данной категории пока нет проектов</p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="mt-4 text-[#7D8B7A] hover:underline"
            >
              Показать все категории
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
