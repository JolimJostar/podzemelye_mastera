import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CampaignsSection } from './components/CampaignsSection';
import { CharactersSection } from './components/CharactersSection';
import { SessionsSection } from './components/SessionsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { UsefulLinksSection } from './components/UsefulLinksSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PricingSection } from './components/PricingSection';

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Header />
            <Hero />
            <AboutSection />
            <CampaignsSection />
            <PricingSection />
            <CharactersSection />
            {/* <SessionsSection /> */}
            <ResourcesSection />
            <UsefulLinksSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
