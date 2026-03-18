import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Palkia from '../Palkia';

describe('Palkia', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Palkia />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renders "Palkia AI" heading', () => {
    render(
      <MemoryRouter>
        <Palkia />
      </MemoryRouter>
    );
    expect(screen.getByText('Palkia AI')).toBeInTheDocument();
  });

  it('renders Section sub-components: Overview, Tech Stack, The Palkia Context Engine, Recognition and Future', () => {
    render(
      <MemoryRouter>
        <Palkia />
      </MemoryRouter>
    );
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
    expect(screen.getByText('The Palkia Context Engine')).toBeInTheDocument();
    expect(screen.getByText('Recognition and Future')).toBeInTheDocument();
  });

  it('renders Stack section with tech items', () => {
    render(
      <MemoryRouter>
        <Palkia />
      </MemoryRouter>
    );
    const techItems = ['Python', 'Typescript', 'SQLlite', 'Gemini API'];
    for (const item of techItems) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
    // React and Supabase appear in both the list and body text
    expect(screen.getAllByText('React').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Supabase').length).toBeGreaterThanOrEqual(1);
  });

  it('renders "Back to Home" link', () => {
    render(
      <MemoryRouter>
        <Palkia />
      </MemoryRouter>
    );
    expect(screen.getByText(/Back to Home/i)).toBeInTheDocument();
  });

  it('renders FooterBar with "Shane Barakat"', () => {
    render(
      <MemoryRouter>
        <Palkia />
      </MemoryRouter>
    );
    expect(screen.getByText('Shane Barakat')).toBeInTheDocument();
  });

  it('renders a video element', () => {
    const { container } = render(
      <MemoryRouter>
        <Palkia />
      </MemoryRouter>
    );
    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
  });

  it('calls window.scrollTo on mount', () => {
    render(
      <MemoryRouter>
        <Palkia />
      </MemoryRouter>
    );
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
