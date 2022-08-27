import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Adopt from './pages/Adopt';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="adopt" element={<Adopt/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  
)