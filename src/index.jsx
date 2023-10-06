import React from 'react'
import ReactDOM from 'react-dom/client'
import '@components/styles/index.scss';
import { NavBar } from '@components/layout';
import { Footer } from '@components/layout'
import CoffeeBagSection from '@components/views/homePage/coffeeBagSection/CoffeeBagSection';
import FooterSection from '@components/views/homePage/FooterSection/FooterSection';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <CoffeeBagSection/>
    <FooterSection />
    <Footer />
  </React.StrictMode>
)
