import React from 'react'
import Pushpin from '../assets/images/pushPin.png'
import EmailIcon from '../assets/images/EmailIcon.png'
import PhoneIcon from '../assets/images/PhoneIcon.png'
import FooterNew from './FooterNew'
import HeaderNew from './HeaderNew'

const PrivacyPolicy = () => {
  return (
    <div>
      <HeaderNew />
      <div className='bg-white px-6 md:px-36 py-16 flex-grow'>
        <h3 className='text-[30px] font-semibold'>Privacy Policy</h3>
        <p className='mt-2 font-semibold'>
          Last updated: <span className='italic'>November 4, 2025</span>
        </p>

        <article className='mt-3 font-sans-serif'>
          <p>
            At Nature Foot Care, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard information when you visit our website
            or contact us through the provided communication channels.
          </p>
        </article>

        <section className='mt-4'>
          <h4 className='font-semibold mb-1'>1. Information We Collect</h4>
          <p className='mb-2'>We may collect personal and non-personal information from you in the following ways:</p>

          <p className='font-semibold ml-4'>a. Personal Information</p>
          <p className='ml-4'>You may voluntarily provide information such as:</p>
          <ul className='ml-12 mt-3 list-disc space-y-2'>
            <li>Your name, email address, and phone number</li>
            <li>Email address</li>
            <li>Messages or inquiries sent via WhatsApp or contact forms</li>
            <li>Any details shared when requesting information about our services</li>
          </ul>

          <p className='font-semibold mt-4 ml-4'>b. Non-Personal Information</p>
          <p className='ml-4'>We may automatically collect certain information when you visit our website, such as:</p>
          <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on the site</li>
            <li>IP address (for security and analytics purposes)</li>
          </ul>
        </section>

        <section>
          <h4 className='font-semibold mt-4 mb-1'>2. How We Use Your Information</h4>
          <p>We use the collected information for the following purposes:</p>
          <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
            <li>To respond to your inquiries and provide requested information about our services</li>
            <li>To improve our website’s content, layout, and user experience</li>
            <li>To communicate with you regarding appointments or updates (if applicable)</li>
            <li>To ensure compliance with applicable legal and regulatory obligations</li>
          </ul>
          <p>We do not use your personal data for unsolicited marketing or share it with unrelated third parties for commercial purposes.</p>
        </section>

        <section>
          <h4 className='font-semibold mt-4 mb-1'>3. Information Sharing and Disclosure</h4>
          <p>We respect your privacy and only share your information in the following situations:</p>
          <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
            <li><span className='font-semibold'>Service Communication:</span> With our authorized representatives to respond to your inquiries</li>
            <li><span className='font-semibold'>Legal Requirements:</span> If required by law, regulation, or court order.</li>
            <li><span className='font-semibold'>Technical Support:</span> With trusted third-party service providers who assist in website operations</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to any external organization.</p>
        </section>

        <section>
          <h4 className='font-semibold mt-4 mb-1'>4. Data Storage and Security</h4>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect your personal data from
            unauthorized access, disclosure, or misuse.
          </p>
          <p>
            However, please note that no online transmission or storage system can be completely secure. You use our website
            and communication channels at your own risk.
          </p>
        </section>

        <section>
          <h4 className='font-semibold mt-4 mb-1'>5. WhatsApp and External Links</h4>
          <p>When you contact us via WhatsApp or access any external links provided on our website:</p>
          <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
            <li>You are subject to the privacy policies and terms of service of those third-party platforms.</li>
            <li>We are not responsible for how third parties handle your information.</li>
          </ul>
          <p>Please review their respective policies before sharing personal information.</p>
        </section>

        <section>
          <h4 className='font-semibold mt-4 mb-1'>6. Cookies and Tracking Technologies</h4>
          <p>Our website may use cookies or similar technologies to enhance user experience and analyze site performance.</p>
          <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
            <li>Cookies help us understand which pages are most useful and improve overall navigation.</li>
            <li>
              You may choose to disable cookies through your browser settings; however, some features may not function properly
              as a result.
            </li>
          </ul>
        </section>

        <section>
          <h4 className='font-semibold mt-4 mb-1'>7. Your Rights</h4>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
            <li>Access, update, or delete your personal data</li>
            <li>Withdraw consent for specific uses</li>
            <li>Request information about how your data is being processed</li>
          </ul>
          <p>To exercise these rights, please contact us using the details provided below.</p>
        </section>

        <section>
          <h4 className='font-semibold mt-4 mb-1'>8. Data Retention</h4>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or
            as required by law. When no longer needed, data will be securely deleted.
          </p>
        </section>

        <section>
          <h4 className='font-semibold mt-4 mb-1'>9. Updates to This Privacy Policy</h4>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Updates will be reflected with a new
            “Last Updated” date. Continued use of our website after changes means you accept the revised policy.
          </p>
        </section>

        {/* ⭐ Aligned Contact Us Section */}
        <section>
          <h4 className='font-semibold mt-4 mb-1'>12. Contact Us</h4>
          <p>For any questions about this Privacy Policy or our services, please contact us:</p>

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

export default PrivacyPolicy
