import React from 'react';
import Pushpin from '../assets/images/pushPin.png'
import EmailIcon from '../assets/images/EmailIcon.png'
import PhoneIcon from '../assets/images/phoneIcon.png'
import HeaderNew from './HeaderNew';
import FooterNew from './FooterNew';

const Terms = () => {
  return (
    <div>
       <HeaderNew />
        <div className='bg-white px-6 md:px-36 py-16'>
            <h3 className='text-[30px] font-semibold'>Terms and Conditions</h3>
            <p className='mt-2 font-semibold'>Last updated: <span className='italic'>November 4, 2025</span></p>
            <article className='mt-3 font-sans-serif'>
                <p>Welcome to Nature Foot Care. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.</p>
            </article>
            <section className=''>
                <h4 className='font-semibold mt-4 mb-1'>1. Website Use</h4>
                <p>This website is provided for informational purposes only. The information about our foot care treatments and packages is subject to change without notice. <br /> We reserve the right to modify or discontinue any part of this website at any time.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>2. Informational Content Only</h4>
                <p>The content on this website, including treatment descriptions and package details, is for general information only and does not constitute:</p>
                <ul className='ml-12 mt-3 list-disc space-y-2'>
                    <li>Medical advice, diagnosis, or treatment</li>
                    <li>A guarantee of specific results</li>
                    <li>An offer to provide services without consultation</li>
                    <li>Professional recommendations for your specific condition</li>
                </ul>
                <p className='font-semibold'>Always consult a qualified healthcare professional before undergoing any foot care treatment, especially if you have existing medical conditions,  <br /> diabetes, circulatory problems, or allergies.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>3. No Online Transactions</h4>
                <p>This website does not process payments, bookings, or reservations. All service inquiries and bookings are handled directly through WhatsApp or other <br /> contact methods provided. Any agreements for services are made directly between you and Nature Foot Care outside of this website.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>4. Accuracy of Information</h4>
                <p>While we strive to keep information accurate and up-to-date:</p>
                <ul className='ml-12 mt-3 list-disc space-y-2'>
                    <li>Treatment descriptions, pricing, and packages may change</li>
                    <li>Services may not be available at all times</li>
                    <li>We are not responsible for errors or omissions in content</li>
                    <li>Please confirm current details by contacting us directly</li>
                </ul>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>5. Intellectual Property</h4>
                <p>All content on this website, including text, images, logos, and graphics, is the property of Nature Foot Care and protected by copyright laws. You may not:</p>
                <ul className='ml-12 mt-3 list-disc space-y-2'>
                    <li>Copy, reproduce, or distribute our content without permission</li>
                    <li>Use our content for commercial purposes</li>
                    <li>Remove any copyright or proprietary notices</li>
                </ul>
                <p>You may view and print pages for personal, non-commercial use only.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>6. External Links</h4>
                <p>Our website may contain links to third-party websites (including WhatsApp). We are not responsible for the content, privacy practices, <br />or terms of service of these external sites. Use them at your own risk.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>7. Limitation of Liability</h4>
                <p>To the fullest extent permitted by law:</p>
                <ul className='ml-12 mt-3 list-disc space-y-2'>
                    <li>This website is provided "as is" without any warranties</li>
                    <li>We are not liable for any damages arising from your use of this website</li>
                    <li>We are not responsible for service interruptions, technical issues, or information accuracy</li>
                    <li>Any decisions based on website information are made at your own risk</li>
                </ul>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>8. Health and Safety Disclaimer</h4>
                <p className='font-semibold'>Important Notice:</p>
                <ul className='ml-12 mt-3 list-disc space-y-2'>
                    <li>Our foot care treatments are not substitutes for medical care</li>
                    <li>Discontinue any treatment if you experience adverse reactions</li>
                    <li>Inform us of any allergies, medical conditions, or medications during consultation</li>
                    <li>We are not liable for allergic reactions or complications from treatments</li>
                    <li>Individual results may vary</li>
                </ul>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>9. Privacy</h4>
                <p>Your use of this website is also governed by our Privacy Policy. Please review it to understand how we handle any information<br /> collected through this website.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>10. Changes to Terms</h4>
                <p>We reserve the right to update these Terms and Conditions at any time. Changes will be effective immediately upon posting. <br /> Your continued use of this website constitutes acceptance of any modifications.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>11. Governing Law</h4>
                <p>These Terms and Conditions are governed by the laws of Sri Lanka.</p>
            </section>
            <section>
            <h4 className='font-semibold mt-4 mb-1'>12. Contact Us</h4>
            <p>For questions about these Terms and Conditions or our services, please contact us:</p>

            <p className='font-semibold mt-4'>Nature Foot Care</p>

            <div className='mt-2'>
                <div className="flex mt-2">
                <span className="w-24 font-semibold">Email:</span>
                <span>ayurvedafootcarenewnature@gmail.com</span>
                </div>

                <div className="flex mt-2">
                <span className="w-24 font-semibold">Phone:</span>
                <span>+94 11 236 1136 / +94 74 261 0334</span>
                </div>

                <div className="flex mt-2">
                <span className="w-24 font-semibold">Whatsapp:</span>
                <span>+94 74 261 0334</span>
                </div>

                <div className="flex mt-2 mb-12">
                <span className="w-24 font-semibold">Address:</span>
                
                <div className="flex flex-col">
                    <span>No.57, W A Silva Mawatha, Colombo 06, Sri Lanka</span>
                    <span>No.8 A, Vajira road, Bambalapitiya, Colombo 04</span>
                </div>
                </div>
            </div>
            </section>


        </div>
        <FooterNew />
    </div>
  )
}

export default Terms