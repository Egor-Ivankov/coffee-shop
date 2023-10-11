import React from 'react'
import ReactDOM from 'react-dom/client'
import '@components/styles/index.scss';
import { NavBar } from '@components/layout';
import { Footer } from '@components/layout'
import { CoffeeBagSection } from './views/homePage';
import { FooterSection } from './views/homePage';
import { BenefitsSection } from './views/homePage';
import { CupCoffeeSection } from './views/homePage';
import { VideoSection } from './views/homePage';
import { HowToSleepSection } from './views/homePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <CoffeeBagSection />
    <BenefitsSection />
    <CupCoffeeSection />
    <VideoSection />
    <HowToSleepSection />
    <FooterSection />
    <Footer />
  </React.StrictMode>
)
