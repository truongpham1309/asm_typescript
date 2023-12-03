import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsList from './pages/ProductsList';
import ProductsCreate from './pages/ProductsCreate';
import ProductsUpdate from './pages/ProductsUpdatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/products_add' element={<ProductsCreate />} />
        <Route path='/products_update/:id' element={<ProductsUpdate />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
