import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Intouch from '../Intouch';

describe('Intouch', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Intouch />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renders page heading "IntouchCX"', () => {
    render(
      <MemoryRouter>
        <Intouch />
      </MemoryRouter>
    );
    expect(screen.getByText('IntouchCX')).toBeInTheDocument();
  });

  it('renders skills list items', () => {
    render(
      <MemoryRouter>
        <Intouch />
      </MemoryRouter>
    );
    const skills = ['Vue.js', 'C#', '.Net', 'Javascript', 'Docker', 'TypeScript', 'UI Path'];
    for (const skill of skills) {
      expect(screen.getByText(skill)).toBeInTheDocument();
    }
  });

  it('renders "Back to Home" link', () => {
    render(
      <MemoryRouter>
        <Intouch />
      </MemoryRouter>
    );
    expect(screen.getByText(/Back to Home/i)).toBeInTheDocument();
  });

  it('calls window.scrollTo on mount', () => {
    render(
      <MemoryRouter>
        <Intouch />
      </MemoryRouter>
    );
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('image onError handler does not crash', () => {
    render(
      <MemoryRouter>
        <Intouch />
      </MemoryRouter>
    );
    const img = screen.getByAltText('IntouchCX');
    // Triggering error should not throw
    expect(() => {
      fireEvent.error(img);
    }).not.toThrow();
  });
});
