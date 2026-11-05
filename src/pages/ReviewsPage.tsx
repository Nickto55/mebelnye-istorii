import { useState } from 'react';
import { Star, Play, Instagram, Send, ThumbsUp, MessageCircle } from 'lucide-react';
import type { Page } from '../App';

interface ReviewsPageProps {
  onNavigate: (page: Page) => void;
}

const reviews = [
  {
    id: 1,
    name: 'Ольга',
    avatar: 'О',
    rating: 5,
    date: '14 мая 2026',
    project: 'Обновление фасадов кухни',
    text: 'Хочу выразить огромную благодарность Сергею за профессионализм, честность и внимательное отношение к клиенту. Изначально была настроена на заказ полностью новой кухни, но после осмотра Сергей честно сказал, что это совсем не обязательно — вместо дорогостоящей замены можно просто обновить фасады и некоторые элементы. В итоге кухня преобразилась, а результат превзошёл ожидания. Рекомендую всем, кто ценит качество и честный подход!',
    likes: 6,
    hasVideo: false,
  },
  {
    id: 2,
    name: 'Игорь и Марина',
    avatar: 'ИМ',
    rating: 5,
    date: '3 июня 2026',
    project: 'Шкаф по индивидуальным размерам',
    text: 'Заказывали шкаф по индивидуальным размерам и остались очень довольны результатом. Все пожелания были учтены, шкаф получился именно таким, как мы хотели: красивым, функциональным и вместительным. Отдельная благодарность Сергею за внимательное отношение к деталям и ответственность. Заказ выполнен в срок, сборка — аккуратно и профессионально. Рекомендуем Сергея как надёжного мастера!',
    likes: 4,
    hasVideo: false,
  },
  {
    id: 3,
    name: 'Андрей',
    avatar: 'А',
    rating: 5,
    date: '19 апреля 2026',
    project: 'Сборка кухни',
    text: 'Хочу выразить благодарность мастеру за сборку кухни. Работа выполнена очень профессионально: аккуратно, с вниманием к деталям и качеству. Недочёты исправлялись сразу, а после завершения осталась полная чистота. Отдельно отмечу, что у мастера есть своя мастерская, где можно доработать детали, если в изготовлении были неточности. Очень рекомендую — надёжный специалист, которому можно доверять!',
    likes: 5,
    hasVideo: false,
  },
  {
    id: 4,
    name: 'Наталья',
    avatar: 'Н',
    rating: 5,
    date: '12 марта 2026',
    project: 'Гардеробная 6 м²',
    text: 'Обратилась в «Мебельные истории» за гардеробной в спальню. Сергей приехал на замер с образцами материалов и помог продумать наполнение — теперь всё под рукой, и ни один сантиметр не пропал зря. Сделали ровно в оговорённый срок, установили за один день, без единой царапины на стенах. Очень довольна, уже посоветовала соседям!',
    likes: 3,
    hasVideo: false,
  },
  {
    id: 5,
    name: 'Дмитрий',
    avatar: 'Д',
    rating: 5,
    date: '5 февраля 2026',
    project: 'Кухня 10 м²',
    text: 'Заказывал кухню с нуля. Понравилось, что Сергей сразу назвал честную цену и не менял её в процессе. Подсказал, где можно сэкономить без потери качества. Готовую кухню привезли и собрали аккуратно, всё отрегулировали. Пользуемся каждый день — никаких нареканий.',
    likes: 4,
    hasVideo: false,
  },
];

const stats = [
  { value: '150+', label: 'выполненных проектов' },
  { value: '98%', label: 'рекомендуют нас' },
  { value: '5 лет', label: 'гарантия на мебель' },
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
            href="https://instagram.com/mebelnye_istorii"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-[#7D8B7A] hover:text-white transition-colors group"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
          <a 
            href="https://t.me/mebelnye_istorii"
            target="_blank"
            rel="noopener noreferrer"
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
