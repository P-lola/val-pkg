

const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(navigator.userAgent) || 
                 (navigator.userAgent === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                 (window.innerWidth >= 768 && window.innerWidth <= 1024);

document.body.style.zoom = isTablet ? "100%" : "50%";

const style = document.createElement('style');
style.textContent = `
  .envelope-container, .letter-container { transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); transform: translateZ(0); }
  .letter-closing { animation: letterClose 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
  @keyframes letterClose { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0); opacity: 0; } }
  .envelope-minimizing { animation: envelopeMinimize 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
  @keyframes envelopeMinimize { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0.3); opacity: 0; } }
`;
document.head.appendChild(style);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/App.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);