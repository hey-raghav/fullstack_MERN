import { Routes, Route } from 'react-router-dom';
import './asset/css/App.css';
import Homepage from './components/Homepage';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Homepage/>} />
        <Route path ="/register" element={<Register/>} />
      
      </Routes>
    </div>
  );
}

export default App;
