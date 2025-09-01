import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home page', () => {
  it('renders hero section', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /welcome to maha evidence engine/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /explore knowledge maps/i })
    ).toBeInTheDocument();
  });

  it('renders featured topics', () => {
    render(<Home />);
    expect(screen.getByText('Curcumin & Cancer')).toBeInTheDocument();
    expect(screen.getByText('Berberine & Diabetes')).toBeInTheDocument();
    expect(screen.getByText('HBOT & Wound Healing')).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<Home />);
    expect(
      screen.getByText(/© 2025 MAHA Evidence Engine. All rights reserved./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Empowering evidence-based natural healing research/i)
    ).toBeInTheDocument();
  });
});
