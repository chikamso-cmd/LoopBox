
import React from 'react';

// interface SocialButtonProps {
//   provider: 'google' | 'apple';
//   label: string;
//   onClick?: () => void;
// }

export const SocialButton = ({ provider, label, onClick }) => {
  const getIcon = () => {
    if (provider === 'google') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.19-3.19C17.54 1.74 14.97 1 12 1 7.42 1 3.5 3.63 1.5 7.44l3.75 2.91C6.14 7.21 8.82 5.04 12 5.04z" />
          <path fill="#4285F4" d="M23.49 12.27c0-.83-.07-1.63-.2-2.39H12v4.51h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.71 2.88c2.17-2 3.42-4.94 3.42-8.58z" />
          <path fill="#FBBC05" d="M5.25 14.12c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09L1.5 7.03C.54 8.99 0 11.21 0 13.53s.54 4.54 1.5 6.5l3.75-2.91z" />
          <path fill="#34A853" d="M12 23c3.24 0 5.96-1.07 7.95-2.91l-3.71-2.88c-1.1.74-2.5 1.18-4.24 1.18-3.18 0-5.86-2.17-6.83-5.09L1.42 16.2C3.42 19.94 7.41 22.57 12 22.57z" />
        </svg>
      );
    }
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" className="hidden" />
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.97 13.01 3.06 10.3c.09-2.73 1.83-4.17 3.59-4.2 1.33-.02 2.58.9 3.4.9.82 0 2.32-1.1 3.91-.94.66.03 2.52.27 3.72 2.03-.1.06-2.22 1.29-2.2 3.84.02 3.04 2.65 4.05 2.68 4.06-.02.05-.42 1.44-1.45 2.95zM15.47 5.38c-.71.86-1.89 1.43-2.92 1.35-.14-1.18.39-2.37 1.05-3.14.73-.85 1.95-1.47 2.89-1.43.15 1.25-.3 2.36-1.02 3.22z" />
      </svg>
    );
  };

  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-4 rounded-xl hover:bg-gray-50 transition-colors active:scale-[0.98]"
    >
      {getIcon()}
      <span className="text-[15px] font-semibold text-gray-700">{label}</span>
    </button>
  );
};
