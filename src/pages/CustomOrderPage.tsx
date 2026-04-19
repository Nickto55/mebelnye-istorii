import { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, Ruler, Calculator, Phone } from 'lucide-react';
import type { Page } from '../App';

interface CustomOrderPageProps {
  onNavigate: (page: Page) => void;
}

const steps = [
  { id: 1, title: 'Тип мебели' },
  { id: 2, title: 'Размеры' },
  { id: 3, title: 'Материалы' },
  { id: 4, title: 'Контакты' },
];

const furnitureTypes = [
  { id: 'kitchen', name: 'Кухня', icon: '🍳' },
  { id: 'wardrobe', name: 'Шкаф/Гардеробная', icon: '👔' },
  { id: 'living', name: 'Гостиная', icon: '🛋️' },
  { id: 'bathroom', name: 'Ванная', icon: '🚿' },
  { id: 'office', name: 'Кабинет', icon: '💼' },
  { id: 'hallway', name: 'Прихожая', icon: '🚪' },
];

const materials = [
  { id: 'ldsp', name: 'ЛДСП', price: 'от 15 000 ₽/м²', description: 'Бюджетный вариант' },
  { id: 'mdf', name: 'МДФ', price: 'от 25 000 ₽/м²', description: 'Для фасадов' },
  { id: 'veneer', name: 'Шпон', price: 'от 45 000 ₽/м²', description: 'Натуральное дерево' },
  { id: 'solid', name: 'Массив', price: 'от 65 000 ₽/м²', description: 'Премиум' },
];

export function CustomOrderPage({ onNavigate }: CustomOrderPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    width: '',
    height: '',
    depth: '',
    material: '',
    name: '',
    phone: '',
    email: '',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.type !== '';
      case 2:
        return formData.width !== '' && formData.height !== '';
      case 3:
        return formData.material !== '';
      case 4:
        return formData.name !== '' && formData.phone !== '';
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-[#F6F4F1]">
        <div className="container-custom mx-auto section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12">
              <div className="w-20 h-20 rounded-full bg-[#7D8B7A] flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 
                className="text-3xl text-[#2D2D2D] font-medium mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Заявка отправлена!
              </h2>
              <p className="text-[#6B6B6B] mb-8">
                Спасибо за обращение! Наш менеджер свяжется с вами в течение 30 минут 
                для уточнения деталей и подготовки предварительного расчёта.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => onNavigate('home')}
                  className="btn-primary"
                >
                  НА ГЛАВНУЮ
                </button>
                <button 
                  onClick={() => onNavigate('portfolio')}
                  className="btn-secondary"
                >
                  СМОТРЕТЬ ПОРТФОЛИО
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4">
            Расчёт стоимости
          </span>
          <h1 
            className="text-4xl md:text-5xl text-[#2D2D2D] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Индивидуальный заказ
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            Ответьте на несколько вопросов, и мы подготовим предварительный расчёт 
            стоимости вашего проекта
          </p>
        </div>

        {/* Progress */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                    step.id <= currentStep 
                      ? 'bg-[#7D8B7A] text-white' 
                      : 'bg-[#E0DCD6] text-[#6B6B6B]'
                  }`}
                >
                  {step.id < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span 
                  className={`hidden sm:block ml-3 text-sm ${
                    step.id <= currentStep ? 'text-[#2D2D2D]' : 'text-[#6B6B6B]'
                  }`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-12 h-px mx-4 ${
                    step.id < currentStep ? 'bg-[#7D8B7A]' : 'bg-[#E0DCD6]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Furniture Type */}
              {currentStep === 1 && (
                <div>
                  <h3 
                    className="text-2xl text-[#2D2D2D] font-medium mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Какую мебель планируете заказать?
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {furnitureTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, type: type.id })}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          formData.type === type.id
                            ? 'border-[#7D8B7A] bg-[#7D8B7A]/5'
                            : 'border-[#E0DCD6] hover:border-[#7D8B7A]/50'
                        }`}
                      >
                        <span className="text-3xl mb-2 block">{type.icon}</span>
                        <span className="text-[#2D2D2D] font-medium text-sm">{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Dimensions */}
              {currentStep === 2 && (
                <div>
                  <h3 
                    className="text-2xl text-[#2D2D2D] font-medium mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Укажите примерные размеры
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-[#6B6B6B] mb-2">Ширина (см)</label>
                      <div className="relative">
                        <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
                        <input
                          type="number"
                          value={formData.width}
                          onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                          placeholder="300"
                          className="w-full pl-12 pr-4 py-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#6B6B6B] mb-2">Высота (см)</label>
                      <div className="relative">
                        <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
                        <input
                          type="number"
                          value={formData.height}
                          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                          placeholder="220"
                          className="w-full pl-12 pr-4 py-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#6B6B6B] mb-2">Глубина (см)</label>
                      <div className="relative">
                        <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
                        <input
                          type="number"
                          value={formData.depth}
                          onChange={(e) => setFormData({ ...formData, depth: e.target.value })}
                          placeholder="60"
                          className="w-full pl-12 pr-4 py-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#6B6B6B]">
                    Не беспокойтесь, если размеры примерные. Точный замер выполнит наш специалист.
                  </p>
                </div>
              )}

              {/* Step 3: Materials */}
              {currentStep === 3 && (
                <div>
                  <h3 
                    className="text-2xl text-[#2D2D2D] font-medium mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Выберите материал
                  </h3>
                  <div className="space-y-3">
                    {materials.map((material) => (
                      <button
                        key={material.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, material: material.id })}
                        className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                          formData.material === material.id
                            ? 'border-[#7D8B7A] bg-[#7D8B7A]/5'
                            : 'border-[#E0DCD6] hover:border-[#7D8B7A]/50'
                        }`}
                      >
                        <div className="text-left">
                          <span className="text-[#2D2D2D] font-medium block">{material.name}</span>
                          <span className="text-[#6B6B6B] text-sm">{material.description}</span>
                        </div>
                        <span className="text-[#B8956B] font-medium">{material.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contacts */}
              {currentStep === 4 && (
                <div>
                  <h3 
                    className="text-2xl text-[#2D2D2D] font-medium mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Оставьте контакты
                  </h3>
                  <div className="space-y-4">
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
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+7 (___) ___-__-__"
                          className="w-full pl-12 pr-4 py-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors"
                        />
                      </div>
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
                      <label className="block text-sm text-[#6B6B6B] mb-2">Комментарий</label>
                      <textarea
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        placeholder="Расскажите подробнее о вашем проекте..."
                        rows={3}
                        className="w-full p-4 bg-[#F6F4F1] border border-transparent rounded-xl focus:outline-none focus:border-[#7D8B7A] transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-[#E0DCD6]">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    currentStep === 1
                      ? 'text-[#6B6B6B] cursor-not-allowed'
                      : 'text-[#2D2D2D] hover:bg-[#F6F4F1]'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Назад
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors ${
                      isStepValid()
                        ? 'bg-[#7D8B7A] text-white hover:bg-[#6A7868]'
                        : 'bg-[#E0DCD6] text-[#6B6B6B] cursor-not-allowed'
                    }`}
                  >
                    Далее
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors ${
                      isStepValid()
                        ? 'bg-[#7D8B7A] text-white hover:bg-[#6A7868]'
                        : 'bg-[#E0DCD6] text-[#6B6B6B] cursor-not-allowed'
                    }`}
                  >
                    <Calculator className="w-5 h-5" />
                    ПОЛУЧИТЬ РАСЧЁТ
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
