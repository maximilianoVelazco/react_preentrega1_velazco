
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import CartPage from './components/cartPage/CartPage';

function App() {
  return (
   
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />
          </div>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
   
  );
}

export default App;
