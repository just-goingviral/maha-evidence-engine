import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

const mockUsePathname = usePathname as jest.Mock;
const mockUseSearchParams = useSearchParams as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

beforeEach(() => {
  mockUsePathname.mockReturnValue('/');
  mockUseSearchParams.mockReturnValue(new URLSearchParams());
  mockUseRouter.mockReturnValue({ push: jest.fn() });
});

describe('Header Component', () => {
  it('renders MAHA Evidence Engine title', () => {
    render(<Header />);
    const title = screen.getByText('MAHA Evidence Engine');
    expect(title).toBeInTheDocument();
  });

  it('uses h1 on home page and span on other pages', () => {
    // Home page
    mockUsePathname.mockReturnValue('/');
    const { rerender } = render(<Header />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'MAHA Evidence Engine' })
    ).toBeInTheDocument();

    // Non-home page
    mockUsePathname.mockReturnValue('/maps');
    rerender(<Header />);
    const title = screen.getByText('MAHA Evidence Engine');
    expect(title.tagName).toBe('SPAN');
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

  it('includes a copy URL button', () => {
    render(<Header />);
    const button = screen.getByRole('button', { name: /copy url/i });
    expect(button).toBeInTheDocument();
  });

  it('renders evidence scope toggle', () => {
    render(<Header />);
    const select = screen.getByRole('combobox', { name: /evidence scope/i });
    expect(select).toBeInTheDocument();
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
