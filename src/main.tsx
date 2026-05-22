import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css';
import { WatchlistProvider } from './context/WatchlistContext.tsx';

createRoot(document.getElementById('root')!).render(
  <WatchlistProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </WatchlistProvider>
)
