import { useState } from 'react';
import { Star, Play, Instagram, Send, ThumbsUp, MessageCircle } from 'lucide-react';
import type { Page } from '../App';

interface ReviewsPageProps {
  onNavigate: (page: Page) => void;
}

const reviews = [
  {
    id: 1,
    name: 'Анна и Сергей Петровы',
    avatar: 'АП',
    rating: 5,
    date: '15 марта 2024',
    project: 'Кухня "Сканди"',
    text: 'Заказывали кухню в скандинавском стиле. Остались полностью довольны результатом! Команда профессионалов — от дизайнера до сборщиков. Всё сделано в срок, качество на высоте. Особенно понравился подход к деталям и внимание к нашим пожеланиям.',
    likes: 12,
    hasVideo: true,
  },
  {
    id: 2,
    name: 'Михаил Волков',
    avatar: 'МВ',
    rating: 5,
    date: '28 февраля 2024',
    project: 'Гардеробная "Люкс"',
    text: 'Работали с KORPUS MEBEL по рекомендации друзей и не пожалели. Гардеробная получилась просто шикарной! Много внимания уделили планировке и функциональности. Цена оказалась даже ниже, чем у конкурентов, а качество — выше.',
    likes: 8,
    hasVideo: false,
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    avatar: 'ЕС',
    rating: 5,
    date: '10 января 2024',
    project: 'Множество проектов',
    text: 'Как дизайнер, я очень требовательна к качеству мебели. KORPUS MEBEL — одна из немногих компаний, которая соответствует моим стандартам. Работаю с ними уже третий год, все клиенты довольны. Рекомендую!',
    likes: 24,
    hasVideo: true,
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    avatar: 'ДК',
    rating: 5,
    date: '5 декабря 2023',
    project: 'Полный фурнитур дома',
    text: 'Заказывали мебель для всего дома — кухню, гардеробные, гостиную, кабинет. Всё выполнено в едином стиле, идеально вписалось в интерьер. Сборщики аккуратные, всё убрали после себя. Отдельное спасибо за терпение к нашим правкам!',
    likes: 15,
    hasVideo: false,
  },
  {
    id: 5,
    name: 'Ольга Николаева',
    avatar: 'ОН',
    rating: 5,
    date: '18 ноября 2023',
    project: 'Кухня "Прованс"',
    text: 'Мечтала о кухне в стиле прованс много лет. Ребята из KORPUS MEBEL воплотили мою мечту в реальность! Каждая деталь продумана, качество материалов отличное. Спасибо за терпение и профессионализм!',
    likes: 19,
    hasVideo: true,
  },
  {
    id: 6,
    name: 'Александр Морозов',
    avatar: 'АМ',
    rating: 5,
    date: '2 октября 2023',
    project: 'Гостиная "Медиа"',
    text: 'Заказывали медиастену для гостиной. Получилось стильно и функционально. Особенно нравится подсветка — создаёт уютную атмосферу вечером. Рекомендую!',
    likes: 7,
    hasVideo: false,
  },
];

const stats = [
  { value: '500+', label: 'довольных клиентов' },
  { value: '98%', label: 'рекомендуют нас' },
  { value: '4.9', label: 'средняя оценка' },
];

export function ReviewsPage({ onNavigate }: ReviewsPageProps) {
  const [likedReviews, setLikedReviews] = useState<number[]>([]);

  const handleLike = (id: number) => {
    if (likedReviews.includes(id)) {
      setLikedReviews(likedReviews.filter((r) => r !== id));
    } else {
      setLikedReviews([...likedReviews, id]);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F6F4F1]">
      <div className="container-custom mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#7D8B7A] text-sm uppercase tracking-[0.2em] mb-4">
            Отзывы
          </span>
          <h1 
            className="text-4xl md:text-5xl text-[#2D2D2D] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Что говорят наши клиенты
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            Мы ценим каждый отзыв и постоянно работаем над улучшением качества 
            наших услуг.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div 
                className="text-4xl lg:text-5xl text-[#7D8B7A] font-medium mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[#6B6B6B] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="#" 
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-[#7D8B7A] hover:text-white transition-colors group"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-[#7D8B7A] hover:text-white transition-colors group"
          >
            <Send className="w-5 h-5" />
            <span className="text-sm font-medium">Telegram</span>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#7D8B7A] flex items-center justify-center text-white font-medium">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-[#2D2D2D] font-medium text-sm">{review.name}</h4>
                    <p className="text-[#6B6B6B] text-xs">{review.date}</p>
                  </div>
                </div>
                {review.hasVideo && (
                  <div className="w-8 h-8 rounded-full bg-[#7D8B7A]/10 flex items-center justify-center">
                    <Play className="w-4 h-4 text-[#7D8B7A]" />
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8956B] text-[#B8956B]" />
                ))}
              </div>

              {/* Project */}
              <span className="inline-block px-3 py-1 bg-[#F6F4F1] rounded-full text-xs text-[#6B6B6B] mb-3">
                {review.project}
              </span>

              {/* Text */}
              <p className="text-[#2D2D2D] text-sm leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E0DCD6]">
                <button
                  onClick={() => handleLike(review.id)}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    likedReviews.includes(review.id) 
                      ? 'text-[#7D8B7A]' 
                      : 'text-[#6B6B6B] hover:text-[#7D8B7A]'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${likedReviews.includes(review.id) ? 'fill-current' : ''}`} />
                  <span>{review.likes + (likedReviews.includes(review.id) ? 1 : 0)}</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#7D8B7A] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>Ответить</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#7D8B7A] rounded-3xl p-8 lg:p-12">
            <h3 
              className="text-2xl lg:text-3xl text-white font-medium mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Остались вопросы?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Свяжитесь с нами любым удобным способом — мы с радостью ответим 
              на все ваши вопросы
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => onNavigate('contacts')}
                className="bg-white text-[#7D8B7A] px-8 py-4 rounded-lg font-medium uppercase tracking-wider hover:bg-white/90 transition-colors"
              >
                КОНТАКТЫ
              </button>
              <button 
                onClick={() => onNavigate('custom-order')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium uppercase tracking-wider hover:bg-white hover:text-[#7D8B7A] transition-colors"
              >
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
