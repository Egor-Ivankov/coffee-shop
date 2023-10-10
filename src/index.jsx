import React from 'react'
import ReactDOM from 'react-dom/client'
import '@components/styles/index.scss';
import { NavBar } from '@components/layout';
import { Footer } from '@components/layout'
import CoffeeBagSection from '@components/views/homePage/СoffeeBagSection/CoffeeBagSection';
import FooterSection from '@components/views/homePage/FooterSection/FooterSection';
import BenefitsSection from '@components/views/homePage/BenefitsSection/BenefitsSection';
import CupCoffeeSection from '@components/views/homePage/CupCoffeeSection/CupCoffeeSection';
import VideoSection from '@components/views/homePage/VideoSection/VideoSection';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <CoffeeBagSection/>
    <BenefitsSection/>
    <CupCoffeeSection/>
    <VideoSection/>
    <FooterSection />
    <Footer />
  </React.StrictMode>
)
