import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import PillThought from '../PillThought';

describe('PillThought', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <PillThought />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renders "PillThought" heading', () => {
    render(
      <MemoryRouter>
        <PillThought />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /PillThought/i })).toBeInTheDocument();
  });

  it('renders section headings: Origins, Partners & Achievements, Future Goals', () => {
    render(
      <MemoryRouter>
        <PillThought />
      </MemoryRouter>
    );
    expect(screen.getByText('Origins')).toBeInTheDocument();
    expect(screen.getByText(/Partners & Achievements/i)).toBeInTheDocument();
    expect(screen.getByText('Future Goals')).toBeInTheDocument();
  });

  it('renders "Back to Home" link', () => {
    render(
      <MemoryRouter>
        <PillThought />
      </MemoryRouter>
    );
    expect(screen.getByText(/Back to Home/i)).toBeInTheDocument();
  });

  it('renders footer with company name and date', () => {
    render(
      <MemoryRouter>
        <PillThought />
      </MemoryRouter>
    );
    expect(screen.getByText('Shane Barakat')).toBeInTheDocument();
    expect(screen.getByText(/Last Update/i)).toBeInTheDocument();
  });

  it('calls window.scrollTo on mount', () => {
    render(
      <MemoryRouter>
        <PillThought />
      </MemoryRouter>
    );
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
