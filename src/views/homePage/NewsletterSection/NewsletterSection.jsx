import React from 'react'
import coffeeBeans from '@assets/img/beans-leaves.png'
import waves from '@assets/img/lines.png'
import './newsletterSection.scss'

const NewsletterSection = () => {
  return (
    <section className='newsletter-section'>
        <img src={waves} className="newsletter-section-waves" alt='waves' />
        <img src={coffeeBeans} className='newsletter-section-beans' alt="coffee-beans" />
        <div className="newsletter-section-subscribe">
            <h3 className='newsletter-section-subscribe-h3'>SUBSCRIBE TO <br /> NEWSLETTER</h3>
            <p className='newsletter-section-subscribe-p'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
            <div className='newsletter-section-subscribe-input'>
              <input placeholder='ENTER EMAIL ADDRESS' className='newsletter-section-subscribe-input-input'/>
              <button className='newsletter-section-subscribe-input-button'>Subscribe Now</button>
            </div>
        </div>
    </section>
  )
}

export default NewsletterSection