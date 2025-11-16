import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom';

// Function to check if the element is in the footer
const isElementInFooter = (element, footerHeight) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.bottom > viewportHeight - footerHeight; // Check if the element's bottom is above the footer's top
};

const FloatingWhatsapp = () => {
    const [isVisible, setIsVisible] = useState(false); // Start as hidden
    const [scrollPosition, setScrollPosition] = useState(0);
    const [bottomPosition, setBottomPosition] = useState('56px');
    const location = useLocation();

    useEffect(() => {
        // This function will now be re-run on page navigation
        const handleScroll = () => {
            const footer = document.querySelector('footer'); // Assuming your footer has a 'footer' tag or a specific class
            const heroSection = document.getElementById('hero-section'); // Use the consistent ID
            const currentScrollPos = window.pageYOffset;

            // Check if mobile menu is open and if on Terms or Privacy Policy page
            const isMobileMenuOpen = document.getElementById('mobile-menu-overlay');
            // Assuming '/terms' and '/privacy-policy' are the paths for these pages
            const isTermsOrPrivacyPage = location.pathname === '/terms' || location.pathname === '/privacy';

            if (isMobileMenuOpen && isTermsOrPrivacyPage) {
                setIsVisible(false); // Hide the icon
                return; // Exit early, overriding other visibility logic
            }

            if (footer) {
                const footerHeight = footer.offsetHeight;
                const newBottom = isElementInFooter(document.getElementById('floating-whatsapp-button'), footerHeight) ? '80px' : '56px'; // Adjust as needed
                setBottomPosition(newBottom);
            }

            // This scroll logic should apply on ALL pages with a hero section, for both wzyeb and mobile
            if (heroSection) {
                const heroHeight = heroSection.offsetHeight;
                // Show only when scrolled past the hero section
                setIsVisible(currentScrollPos > heroHeight);
            } else {
                setIsVisible(true); // No hero section, so always visible
            }
            setScrollPosition(currentScrollPos);
        };

        // Run on mount to set initial state correctly
        handleScroll();

        // Set up a MutationObserver to watch for the mobile menu appearing/disappearing
        const observer = new MutationObserver(handleScroll);
        observer.observe(document.body, {
            childList: true, // Watch for addition/removal of nodes
            subtree: true    // Watch descendants as well
        });

        window.addEventListener('resize', handleScroll); // Also use handleScroll on resize
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up listeners and observer
            observer.disconnect();
            window.removeEventListener('resize', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };

    }, [location.pathname]); // Re-run the effect when the path changes

    return (
        isVisible && (
        <a
            href="https://wa.me/94742610334?text=Hello%2C%20I%20would%20like%20to%20make%20an%20appointment."
            target='_blank'
            rel='noopener noreferrer'
            id='floating-whatsapp-button' // Add an ID for easier reference
            style={{
                position: 'fixed', // Keep it fixed
                bottom: isVisible ? bottomPosition : '-100px', // Use isVisible to control on-screen/off-screen position
                right: '8px',
                zIndex: 1000,
                backgroundColor: '#25D366',
                borderRadius: '50%',
                padding: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            aria-label='Chat on Whatsapp'
        >
            <FaWhatsapp color='white' size={32} />
        </a>)
    );
};

export default FloatingWhatsapp;