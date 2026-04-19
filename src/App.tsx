import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactsPage } from './pages/ContactsPage';
import { CustomOrderPage } from './pages/CustomOrderPage';
import { ChatButton } from './components/ChatButton';

export type Page = 'home' | 'catalog' | 'portfolio' | 'materials' | 'delivery' | 'reviews' | 'contacts' | 'custom-order';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'catalog':
        return <CatalogPage onNavigate={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={setCurrentPage} />;
      case 'materials':
        return <MaterialsPage onNavigate={setCurrentPage} />;
      case 'delivery':
        return <DeliveryPage onNavigate={setCurrentPage} />;
      case 'reviews':
        return <ReviewsPage onNavigate={setCurrentPage} />;
      case 'contacts':
        return <ContactsPage />;
      case 'custom-order':
        return <CustomOrderPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F4F1]">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        isScrolled={isScrolled} 
      />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <ChatButton />
    </div>
  );
}

export default App;
