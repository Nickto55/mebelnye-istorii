import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you would typically send the message to your backend
      alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.');
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
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

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
          <div className="bg-[#7D8B7A] p-4">
            <h4 className="text-white font-medium">Напишите нам</h4>
            <p className="text-white/70 text-sm">Ответим в течение 15 минут</p>
          </div>
          <div className="p-4">
            <div className="bg-[#F6F4F1] rounded-lg p-3 mb-4">
              <p className="text-sm text-[#6B6B6B]">
                Здравствуйте! Чем можем помочь? Расскажите о вашем проекте — 
                мы подготовим предварительный расчёт.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ваше сообщение..."
                className="w-full p-3 border border-[#E0DCD6] rounded-lg resize-none h-24 text-sm focus:outline-none focus:border-[#7D8B7A] transition-colors"
              />
              <button
                type="submit"
                className="w-full mt-3 btn-primary py-3 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
