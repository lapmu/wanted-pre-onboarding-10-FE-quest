import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import Api from './page/Api';
import Header from './page/layout/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/api' element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
