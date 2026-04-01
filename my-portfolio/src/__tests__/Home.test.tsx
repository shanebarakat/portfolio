import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Stub image/svg imports so they don't fail in jsdom
vi.mock('../assets/Placeholder (2).png', () => ({ default: 'intouch.png' }));
vi.mock('../assets/Placeholder (3).png', () => ({ default: 'pillthought.png' }));
vi.mock('../assets/future (1).png', () => ({ default: 'watonomous.png' }));
vi.mock('../assets/future (4).png', () => ({ default: 'palkia.png' }));
vi.mock('../assets/pocket_ats_logo_no_shadow (1).png', () => ({ default: 'pocketats.png' }));
vi.mock('../assets/Waterloo logo.png', () => ({ default: 'waterloo.png' }));
vi.mock('../assets/Shopify.png', () => ({ default: 'shopify.png' }));
vi.mock('../assets/Google Logo.svg', () => ({ default: 'google.svg' }));
vi.mock('../assets/Palkia_Logo-removebg-preview.png', () => ({ default: 'palkia-logo.png' }));
vi.mock('../assets/IntouchCX logo.png', () => ({ default: 'intouchcx-logo.png' }));
vi.mock('../assets/Shopify Logo.png', () => ({ default: 'shopify-logo.png' }));
vi.mock('../assets/startup (1).png', () => ({ default: 'polarity-logo.png' }));
vi.mock('../assets/Polarity (2).png', () => ({ default: 'polarity.png' }));
vi.mock('../assets/Afore.jpg', () => ({ default: 'afore.jpg' }));

// Mock useNavigate so we can assert navigation calls
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

import Home from '../Home';

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
}

describe('Home page', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  it('renders the page heading', () => {
    renderHome();
    // "Shane Barakat" appears in both mobile and desktop headings
    const headings = screen.getAllByText('Shane Barakat');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders the GitHub social link', () => {
    renderHome();
    const githubLinks = screen.getAllByRole('link', { name: /github/i });
    expect(githubLinks.length).toBeGreaterThan(0);
    expect(githubLinks[0]).toHaveAttribute('href', expect.stringContaining('github.com'));
  });

  it('renders the LinkedIn social link', () => {
    renderHome();
    const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i });
    expect(linkedinLinks.length).toBeGreaterThan(0);
    expect(linkedinLinks[0]).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  });

  it('renders portfolio project cards', () => {
    renderHome();
    // Portfolio images are rendered with role="img" or as img elements
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('navigation to /intouchcx is triggered when InTouchCX card is clicked', () => {
    renderHome();
    // Multiple images share the alt text; the clickable grid image is the larger one
    const intouchImages = screen.getAllByAltText('IntouchCX');
    // The portfolio card image has the cursor-pointer class
    const card = intouchImages.find(img => img.className.includes('cursor-pointer'));
    expect(card).toBeDefined();
    fireEvent.click(card!);
    expect(mockNavigate).toHaveBeenCalledWith('/intouchcx');
  });

  it('navigation to /palkia is triggered when Palkia card is clicked', () => {
    renderHome();
    const palkiaImages = screen.getAllByAltText('Palkia');
    const card = palkiaImages.find(img => img.className.includes('cursor-pointer'));
    expect(card).toBeDefined();
    fireEvent.click(card!);
    expect(mockNavigate).toHaveBeenCalledWith('/palkia');
  });

  it('navigation to /pillthought is triggered when PillThought card is clicked', () => {
    renderHome();
    const pill = screen.getByAltText('PillThought');
    fireEvent.click(pill);
    expect(mockNavigate).toHaveBeenCalledWith('/pillthought');
  });
});
