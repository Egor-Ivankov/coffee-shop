import React from 'react'
import { NavBar } from '@components/layout';
import { Footer } from '@components/layout';
import { 
	CoffeeBagSection, 
	BenefitsSection, 
	CupCoffeeSection, 
	VideoSection, 
	HowToSleepSection, 
	SliderSection,
	NewsletterSection, 
	FooterSection
} from '../views/homePage';

const Home = () => {
  return (
    <>
    <NavBar/>
		<CoffeeBagSection />
		<BenefitsSection />
		<CupCoffeeSection />
		<VideoSection />
		<HowToSleepSection />
		<SliderSection/>
		<NewsletterSection />
		<FooterSection />
		<Footer />
    </>
  )
}

export default Home;