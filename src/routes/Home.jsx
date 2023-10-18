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
	<div className='home-page'>
		<CoffeeBagSection />
		<BenefitsSection />
		<CupCoffeeSection />
		<VideoSection />
		<HowToSleepSection />
		<SliderSection/>
		<NewsletterSection />
		<FooterSection />
	</div>
	<Footer />
	</>
  )
}

export default Home;