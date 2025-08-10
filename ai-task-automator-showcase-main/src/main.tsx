import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

declare global {
  interface Window {
    __hidePreloader?: () => void;
    __preloaderTimer?: number | null;
  }
}

createRoot(document.getElementById("root")!).render(<App />);

// Hide the HTML preloader (if it showed) once React is mounted
window.__hidePreloader?.();
