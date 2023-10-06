import React from 'react'

const FooterSection = () => {
  return (
    <section className='footer-section'>
        <img className='footer-section-rope' alt='rope'/>
        <img className='footer-section-rope-tea-bag' alt='tea-bag'/>
        <div className='footer-section-block'>
            <div className='footer-section-block-info'>
                <div className='footer-section-block-info-locate'>
                    <h3 className='footer-section-block-info-locate-h3'>LOCATE</h3>
                    <p className='footer-section-block-info-locate-p'>Warehouse 12, Street 6A</p>
                    <p className='footer-section-block-info-locate-p'>Behind Times Square Center,</p>
                    <p className='footer-section-block-info-locate-p'>Phase 1 AI Quoz, Dubai, UAE</p>
                    <br />
                    <p className='footer-section-block-info-locate-p'>+971 55 900 0448</p>
                    <p className='footer-section-block-info-locate-p'>info@suncoffee.com</p>
                </div>

                <div className='footer-section-block-info-our-terms'>
                    <h3 className='footer-section-block-info-locate-h3'>OUR TERMS</h3>
                    <p className='footer-section-block-info-locate-link'>Terms Of Service</p>
                    <p className='footer-section-block-info-locate-link'>Refund & Cancellation</p>
                    <p className='footer-section-block-info-locate-link'>Privacy Policy</p>
                    <p className='footer-section-block-info-locate-link'>Delivery Information</p>
                </div>

                <div className='footer-section-block-info-get-connected'>
                    <h3 className='footer-section-block-info-get-connected-h3'>GET CONNECTED</h3>
                    <ul className='footer-section-block-info-get-connected-list'>
                        <li className='footer-section-block-info-get-connected-list-link'>FB</li>
                        <li className='footer-section-block-info-get-connected-list-link'>TW</li>
                        <li className='footer-section-block-info-get-connected-list-link'>WS</li>
                        <li className='footer-section-block-info-get-connected-list-link'>YT</li>
                        <li className='footer-section-block-info-get-connected-list-link'>INST</li>
                    </ul>
                </div>

                <div className='footer-section-block-info-customer-services'>
                <h3 className='footer-section-block-info-customer-services-h3'>OUR TERMS</h3>
                    <p className='footer-section-block-info-customer-services-link'>Terms Of Service</p>
                    <p className='footer-section-block-info-customer-services-link'>Refund & Cancellation</p>
                    <p className='footer-section-block-info-customer-services-link'>Privacy Policy</p>
                    <p className='footer-section-block-info-customer-services-link'>Delivery Information</p>
                </div>
            </div>

            <img className='footer-section-block-coffee-cup' alt="coffee-cup" />
        </div>
    </section>
  )
}

export default FooterSection