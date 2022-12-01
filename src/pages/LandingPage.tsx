import React from 'react'
import ladyicon from '../assets/ladyVideoImage.svg'
import google from '../assets/google.svg'
import ibm from '../assets/ibm.svg'
import meta from '../assets/meta.svg'
import microsoft from '../assets/microsoft.svg'
import slack from '../assets/slack.svg'
import doteddone from '../assets/doteddone.svg'
import itsupport from '../assets/itsupportImage.svg'
import unsplash from '../assets/unsplash_Lks7vei-eAg (1).svg'
import troolog from '../assets/Troolog.svg'
import troolog2 from '../assets/troolog2.svg'
import facebookicon from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import NavBar from '../components/NavBar'


const LandingPage = () => {
  return (
   <main>
    <NavBar/>
    <section className='overall-session'>
        <div className='section-1'>
            <div className="firstlayimg">
                <img src={ladyicon} alt='lady'/>
            </div>
            <div className='section1-right'>
                <div className='middle-box'>
                    <div className='middle-box-inner'>
                        <h2 className='feedback-text'>
                    Feedback gathering and analytics for businesses
                </h2>
                <p className='leverage-feedback'>Leverage feedback from employees to grow revenue</p>
                <button className='middle-box-inner-button'>Start for free</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-after">
            <div className='divide'>
                <div className="divider1"></div>
            </div>
            <h4 className='truted-text'>Trusted  by</h4>
            <section className='trustee-icons'>
                
                    <img src={microsoft} alt="microsoft" className='trustee-icon'/>
               
             
                    <img src={google} alt="google" className='trustee-icon'/>
              
               
                    <img src={ibm} alt="ibm" className='trustee-icon'/>
                
              
                    <img src={meta} alt="meta" className='trustee-icon'/>
          
                    <img src={slack} alt="slack" className='trustee-icon'/>
           




            </section>
             <div className='divide'>
                <div className="divider1"></div>
            </div>

        </div>
        <div className="topic-section">
            <h3 className='topic1'>
                How Troolog Supports Your Business
            </h3>
            <h4 className='topic2'>Troolog enables businesses to gather internal feedbacks in a way that’s exremely seamless.</h4>
        </div>
        <div className="pmi-video">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/08mV2SxRn1k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='full-with'></iframe>
        </div>
    </section>
    <div className="main-bottom">
        <h1 className='for-business-text'>For Businesses</h1>
        <h2 className='after-business-text'>Troolog enables businesses to gather internal feedbacks in a way that’s exremely seamless.</h2>
        <div className="section-list-item">
            <div className="container-of-list">
               <ul>
                 <li className="item-of-list">
                 <img src={doteddone} alt='doteddone' className='dotted-done'/>
                  <p>Gather feedback from employees seamlessly with no time wasted.
</p>
                </li>
                 <li className="item-of-list">
                 <img src={doteddone} alt='doteddone' className='dotted-done'/>
                  <p>Troolog automatically applies analytics to group feedbacks based on sentiments, suggestions and other relevant categories.


</p>
                </li>
                <li className="item-of-list">
                 <img src={doteddone} alt='doteddone'className='dotted-done'/>
                  <p>Use the feedback analytics report to synthesize meaning and conclusions.



</p>
                </li>
                 <li className="item-of-list">
                 <img src={doteddone} alt='doteddone' className='dotted-done'/>
                  <p>Make presentations to wider teams with the analytics reports.



</p>
                </li>
                 <li className="item-of-list">
                 <img src={doteddone} alt='doteddone' className='dotted-done'/>
                  <p>Bring your business closer to customers, sustain revenue.



</p>
                </li>
                <button className='start-free-white-btn'>Start for free</button>
               </ul>
            </div>
            <div className="image-right-side">
    <img src={itsupport} alt='itsupport' className='itsupport'/>
            </div>
        </div>
        

    </div>

    <div className='section-1'>
            <div className='unpslash-box'>
                <img src={unsplash} alt='lady' className='unpslash-box-image'/>
            </div>
            <div className='section1-right'>
                <div className='middle-box2'>
                    <div className='middle-box-inner2'>
                        <h2 className='contact-us-text'>
                   Contact us
                </h2>
                <p className='after-contact-text'>Sometimes you need a little help from your friends.  Or Troolog support rep. Don’t worry we’re here for you.</p>
                <button className='open-mail-btn'>Open Mail</button>
                    </div>
                </div>
            </div>
        </div>
        <footer className='footer'>
            <div className="social-icon-section">
                <div className="troolog">
                    <img src={troolog2} alt='trolog' className="trologimg"/>
                </div>
                <div className="facebook-svg-side">
                    <img src={facebookicon} alt="facebook" className='fc-icon'/>
                    <img src={linkedin} alt="linkedin" className='fc-icon'/>
                    <img src={instagram} alt="instagram"className='fc-icon'/>

                </div>
                
            </div>
            <div className="footer-side-box">
                <div className="first-footer-list">
                    <ul>
                        <li className='listheader'>
                            Company
                        </li>
                        <li className='listafter'>
                            Terms
                        </li>
                        <li className='listafter'>
                            Privacy
                        </li>
                    </ul>

                </div>
                <div className="second-footer-list">
                    <ul>
                        <li className='listheader'>
                           Contact
                        </li>
                        <li className='listafter'>
                           Support@troolog.com
                        </li>
                        
                    </ul>


                </div>
            </div>

        </footer>
    
   </main>
  )
}

export default LandingPage