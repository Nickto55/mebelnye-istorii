import { HeroSection } from '../sections/HeroSection';
import { CategoriesSection } from '../sections/CategoriesSection';
import { AdvantagesSection } from '../sections/AdvantagesSection';
import { CTASection } from '../sections/CTASection';
import { PortfolioPreviewSection } from '../sections/PortfolioPreviewSection';
import { ProcessSection } from '../sections/ProcessSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import type { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <CategoriesSection onNavigate={onNavigate} />
      <AdvantagesSection />
      <PortfolioPreviewSection onNavigate={onNavigate} />
      <ProcessSection />
      <CTASection />
      <TestimonialsSection onNavigate={onNavigate} />
    </div>
  );
}
