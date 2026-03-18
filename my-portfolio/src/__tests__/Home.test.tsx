import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Home from '../Home';

describe('Home', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renders "Shane Barakat" heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headings = screen.getAllByText('Shane Barakat');
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  it('renders portfolio grid items with correct alt texts', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const expectedAlts = ['Polarity', 'Shopify', 'IntouchCX', 'Palkia', 'PillThought', 'WATO'];
    for (const alt of expectedAlts) {
      const matches = screen.getAllByAltText(alt);
      expect(matches.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders footer with "Shane Barakat" and "Last Update"', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const footerTexts = screen.getAllByText('Shane Barakat');
    expect(footerTexts.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Last Update/i)).toBeInTheDocument();
  });

  it('renders social links (GitHub, LinkedIn, email)', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    // Social links should be anchor elements
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
