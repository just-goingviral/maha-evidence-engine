import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Page', () => {
  it('renders hero section with links to maps and atlas', () => {
    render(<Home />);
    const mapsLink = screen.getByRole('link', { name: /Explore Knowledge Maps/i });
    expect(mapsLink).toHaveAttribute('href', '/maps');
    const atlasLink = screen.getByRole('link', { name: /View Evidence Atlas/i });
    expect(atlasLink).toHaveAttribute('href', '/atlas');
  });

  it('displays featured research topics with correct links', () => {
    render(<Home />);
    expect(screen.getByText('Curcumin & Cancer')).toBeInTheDocument();
    expect(screen.getByText('Berberine & Diabetes')).toBeInTheDocument();
    expect(screen.getByText('HBOT & Wound Healing')).toBeInTheDocument();
    const topicLinks = screen.getAllByText('View Research →');
    expect(topicLinks).toHaveLength(3);
    expect(topicLinks[0]).toHaveAttribute('href', '/maps?query=curcumin+cancer');
    expect(topicLinks[1]).toHaveAttribute('href', '/maps?query=berberine+diabetes');
    expect(topicLinks[2]).toHaveAttribute('href', '/maps?query=hyperbaric+oxygen+wound+healing');
  });

  it('renders footer with branding text', () => {
    render(<Home />);
    expect(
      screen.getByText('© 2025 MAHA Evidence Engine. All rights reserved.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Empowering evidence-based natural healing research')
    ).toBeInTheDocument();
  });
});
