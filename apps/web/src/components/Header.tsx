import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import site branding configuration from the repository root
// The previous path attempted to go only one level up from `src`,
// resolving to `apps/web/branding/site.json` which doesn't exist.
// We need to traverse up to the monorepo root to reach the shared
// `branding/site.json` file.
import siteConfig from '../../../../branding/site.json';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/maha-logo.svg"
          alt={`${siteConfig.siteName} Logo`}
          width={50}
          height={50}
        />
        <h1 className="ml-4 text-2xl font-bold">{siteConfig.siteName}</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li><Link href="/maps" className="hover:text-accent">Maps</Link></li>
          <li><Link href="/atlas" className="hover:text-accent">Atlas</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
