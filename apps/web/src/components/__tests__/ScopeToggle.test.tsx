import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ScopeToggle from '../ScopeToggle';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('ScopeToggle', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue('/maps');
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    mockPush.mockClear();
  });

  it('renders all scope options', () => {
    render(<ScopeToggle />);
    const select = screen.getByRole('combobox', { name: /evidence scope/i });
    expect(select).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'All' })).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Gold Standard' })
    ).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'RCTs' })).toBeInTheDocument();
  });

  it('updates the URL when the scope changes', () => {
    render(<ScopeToggle />);
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'gold' },
    });
    expect(mockPush).toHaveBeenCalledWith('/maps?scope=gold');
  });
});

