import './App.css';
import { Home } from './pages/Home';
import { Archive } from './pages/Archive';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/archive" element={<Archive />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
