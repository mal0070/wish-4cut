import { Route, Routes } from 'react-router-dom';
import { Home, Frame } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frame" element={<Frame />} />
    </Routes>
  );
}

export default App;
