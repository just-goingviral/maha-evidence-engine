import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders MAHA Evidence Engine title', () => {
    render(<Header />);
    const title = screen.getByText('MAHA Evidence Engine');
    expect(title).toBeInTheDocument();
  });

  it('renders logo with correct alt text', () => {
    render(<Header />);
    const logo = screen.getByAltText('MAHA Evidence Engine Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/maha-logo.svg');
  });

  it('renders navigation links', () => {
    render(<Header />);
    
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    
    const mapsLink = screen.getByText('Maps');
    expect(mapsLink).toBeInTheDocument();
    expect(mapsLink).toHaveAttribute('href', '/maps');
    
    const atlasLink = screen.getByText('Atlas');
    expect(atlasLink).toBeInTheDocument();
    expect(atlasLink).toHaveAttribute('href', '/atlas');
  });

  it('applies correct CSS classes for branding', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-primary');
    expect(header).toHaveClass('text-white');
  });

  it('applies hover styles to navigation links', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    
    links.forEach(link => {
      expect(link).toHaveClass('hover:text-accent');
    });
  });
});
