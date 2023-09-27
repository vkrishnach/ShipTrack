import './App.css';
import { Routes, Route } from 'react-router-dom'
import Content from './components/content';
import Shipment from './components/Shipment';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <div className='totol-container'>
      <Sidebar />
      

      <Routes>
      
        <Route path='/' element={<Content />} />
        <Route path='shipment' element={<Shipment />} />

        

      </Routes>

      </div>
    </div>
  );
}

export default App;
