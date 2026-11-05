import { useState } from 'react';
import { X, Phone, Mail, MapPin, Clock, Instagram, Send, MessageCircle } from 'lucide-react';

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Контактная информация"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-[#2D2D2D] rotate-90' 
            : 'bg-[#7D8B7A] hover:bg-[#6A7868] hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Contact Card */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
          <div className="bg-[#7D8B7A] p-4">
            <h4 className="text-white font-medium">Свяжитесь с нами</h4>
            <p className="text-white/70 text-sm">Ответим в течение 30 минут</p>
          </div>
          <div className="p-4 space-y-3">
            <a
              href="tel:+79046409391"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F4F1] hover:bg-[#7D8B7A] hover:text-white transition-colors group"
            >
              <Phone className="w-5 h-5 text-[#7D8B7A] group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm font-medium">+7 (904) 640-93-91</p>
                <p className="text-xs text-[#6B6B6B] group-hover:text-white/70 transition-colors">Позвонить</p>
              </div>
            </a>
            <a
              href="https://t.me/mebelnye_istorii"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F4F1] hover:bg-[#7D8B7A] hover:text-white transition-colors group"
            >
              <Send className="w-5 h-5 text-[#7D8B7A] group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm font-medium">@mebelnye_istorii</p>
                <p className="text-xs text-[#6B6B6B] group-hover:text-white/70 transition-colors">Telegram</p>
              </div>
            </a>
            <a
              href="https://instagram.com/mebelnye_istorii"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F4F1] hover:bg-[#7D8B7A] hover:text-white transition-colors group"
            >
              <Instagram className="w-5 h-5 text-[#7D8B7A] group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm font-medium">@mebelnye_istorii</p>
                <p className="text-xs text-[#6B6B6B] group-hover:text-white/70 transition-colors">Instagram</p>
              </div>
            </a>
            <a
              href="mailto:mebelnye.istorii@gmail.com"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F4F1] hover:bg-[#7D8B7A] hover:text-white transition-colors group"
            >
              <Mail className="w-5 h-5 text-[#7D8B7A] group-hover:text-white transition-colors" />
              <div>
                <p className="text-sm font-medium break-all">mebelnye.istorii@gmail.com</p>
                <p className="text-xs text-[#6B6B6B] group-hover:text-white/70 transition-colors">Написать на почту</p>
              </div>
            </a>
            <div className="flex items-start gap-3 px-3 pt-2 border-t border-[#E0DCD6]">
              <MapPin className="w-4 h-4 text-[#7D8B7A] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#6B6B6B]">
                Санкт-Петербург, ул. Савушкина, 85
              </p>
            </div>
            <div className="flex items-start gap-3 px-3">
              <Clock className="w-4 h-4 text-[#7D8B7A] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#6B6B6B]">
                Пн-Пт: 10:00 — 19:00
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
