import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';

// Mock the image import
vi.mock('../../assets/images/Home_hero.jpg', () => ({
  default: 'mocked-image-path.jpg'
}));

// Mock the child components
vi.mock('../Header', () => ({
  default: () => <div data-testid="header">Header</div>
}));

// Mock AOS library
vi.mock('aos', () => ({
  default: {
    init: vi.fn()
  }
}));

describe('Hero Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    global.window.open = vi.fn();
  });

  it('should render the hero section', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    // Use getAllByText since there are two h1 elements (mobile + desktop)
    const heroSections = screen.getAllByText(/Rebalance Your Mind, Body & Spirit with Ayurveda/i);
    expect(heroSections.length).toBeGreaterThan(0);
  });

  it('should display the tagline', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    const tagline = screen.getByText(/FOOT CARE, SOUL CARE/i);
    expect(tagline).toBeTruthy();
  });

  it('should render the appointment button', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    const button = screen.getByText(/Book an Appointment/i);
    expect(button).toBeTruthy();
  });

  it('should have correct WhatsApp link on appointment button', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toContain('wa.me/94742610334');
  });

  it('should open WhatsApp on first visit', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('wa.me/94742610334'),
      '_blank'
    );
  });

  it('should not open WhatsApp on subsequent visits', () => {
    sessionStorage.setItem('whatsapp_welcome_sent', 'true');
    
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    
    expect(window.open).not.toHaveBeenCalled();
  });
});
