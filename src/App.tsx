import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Desktop from './pages/desktop/Desktop.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
