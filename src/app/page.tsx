import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import FeatureCards from '@/components/sections/FeatureCards';
import ChatAssistant from '@/components/sections/ChatAssistant';
import RegistrationGuide from '@/components/sections/RegistrationGuide';
import DocumentsGuide from '@/components/sections/DocumentsGuide';
import FAQSection from '@/components/sections/FAQSection';
import MythFact from '@/components/sections/MythFact';
import Timeline from '@/components/sections/Timeline';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeatureCards />
      <ChatAssistant />
      <RegistrationGuide />
      <DocumentsGuide />
      <FAQSection />
      <MythFact />
      <Timeline />
    </>
  );
}
