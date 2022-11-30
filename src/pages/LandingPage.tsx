import React from 'react'
import ladyicon from '../assets/ladyVideoImage.svg'
import google from '../assets/google.svg'
import ibm from '../assets/ibm.svg'
import meta from '../assets/meta.svg'
import microsoft from '../assets/microsoft.svg'
import slack from '../assets/slack.svg'

const LandingPage = () => {
  return (
   <main>
    <section className='overall-session'>
        <div className='section-1'>
            <div>
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
    
   </main>
  )
}

export default LandingPage