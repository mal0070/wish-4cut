import { Route, Routes } from 'react-router-dom';
import { Home, Frame, Shoot, Save, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/frame/:id' element={<Frame/>} />
      <Route path='/shoot' element={<Shoot/>}/>
      <Route path='/save' element={<Save/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
