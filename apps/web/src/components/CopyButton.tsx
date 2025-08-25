import React from 'react';
import { copyToClipboard } from '@/utils/clipboard';

interface CopyButtonProps {
  text?: string;
  label?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, label = 'Copy URL' }) => {
  const handleClick = () => {
    const value = text ?? window.location.href;
    copyToClipboard(value);
  };

  return (
    <button onClick={handleClick} className="hover:text-accent" aria-label={label}>
      {label}
    </button>
  );
};

export default CopyButton;
