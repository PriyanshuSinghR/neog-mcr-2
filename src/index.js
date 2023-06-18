import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HabitContext, HabitProvider } from './context/HabitContext';
import './index.css';
import App from './App';
export { HabitContext };

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <HabitProvider>
        <App />
      </HabitProvider>
    </Router>
  </StrictMode>,
);
