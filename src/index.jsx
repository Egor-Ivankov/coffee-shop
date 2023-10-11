import React from 'react'
import ReactDOM from 'react-dom/client'
import '@components/styles/index.scss';
import { NavBar } from '@components/layout';
import { Footer } from '@components/layout'
import { CoffeeBagSection, BenefitsSection, CupCoffeeSection, VideoSection, HowToSleepSection, NewsletterSection, FooterSection } from './views/homePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <CoffeeBagSection />
    <BenefitsSection />
    <CupCoffeeSection />
    <VideoSection />
    <HowToSleepSection />
    <NewsletterSection />
    <FooterSection />
    <Footer />
  </React.StrictMode>
)
