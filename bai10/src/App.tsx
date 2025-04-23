import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './app/store';
import { login, logout } from './features/auth/authSlice';
import { addItemToCart, removeItemFromCart } from './features/cart/cartSlice';
import { setProducts, addProduct } from './features/product/productSlice';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const { items } = useSelector((state: RootState) => state.cart);
  const { products } = useSelector((state: RootState) => state.product);

  const handleLogin = () => {
    dispatch(login('Hoang Anh'));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleAddToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      dispatch(addItemToCart({ ...product, quantity: 1 }));
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleSetProducts = () => {
    const sampleProducts = [
      { id: 1, name: 'Pho bo', price: 100000 },
      { id: 2, name: 'Pho thai', price: 200000 },
    ];
    dispatch(setProducts(sampleProducts));
  };

  const handleAddProduct = () => {
    const newProduct = { id: 3, name: 'Ca vien chien', price: 300000};
    dispatch(addProduct(newProduct));
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Redux Toolkit - Multi Slice Example</h1>

      {/* Auth Section */}
      <div>
        <h2>Auth</h2>
        {isLoggedIn ? (
          <>
            <p>Welcome, {user}!</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>

      {/* Product Section */}
      <div>
        <h2>Products</h2>
        <button onClick={handleSetProducts}>Load Products</button>
        <button onClick={handleAddProduct}>Add New Product</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart Section */}
      <div>
        <h2>Cart</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
