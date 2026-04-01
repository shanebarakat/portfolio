import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// Mock child route components to isolate App routing logic
vi.mock('../Home', () => ({ default: () => <div data-testid="home-page">Home</div> }));
vi.mock('../Intouch', () => ({ default: () => <div data-testid="intouch-page">Intouch</div> }));
vi.mock('../PillThought', () => ({ default: () => <div data-testid="pillthought-page">PillThought</div> }));
vi.mock('../Palkia', () => ({ default: () => <div data-testid="palkia-page">Palkia</div> }));

import App from '../App';

describe('App routing', () => {
  it('renders the Home component on the root path', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('renders the Intouch component on /intouchcx', () => {
    window.history.pushState({}, '', '/intouchcx');
    render(<App />);
    expect(screen.getByTestId('intouch-page')).toBeInTheDocument();
  });

  it('renders the PillThought component on /pillthought', () => {
    window.history.pushState({}, '', '/pillthought');
    render(<App />);
    expect(screen.getByTestId('pillthought-page')).toBeInTheDocument();
  });

  it('renders the Palkia component on /palkia', () => {
    window.history.pushState({}, '', '/palkia');
    render(<App />);
    expect(screen.getByTestId('palkia-page')).toBeInTheDocument();
  });
});
