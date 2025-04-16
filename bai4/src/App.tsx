import React, { useReducer } from 'react';

const initialCart = [
  { id: '1', name: 'Apple', quantity: 2, price: 30000 },
  { id: '2', name: 'Banana', quantity: 1, price: 12000 },
  { id: '3', name: 'Mango', quantity: 5, price: 15000 },
  { id: '4', name: 'Slat', quantity: 3, price: 13000 },
];

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {

        return [...state, action.payload];
      }

    case actionTypes.REMOVE_ITEM:

      return state.filter(item => item.id !== action.payload.id);

    case actionTypes.UPDATE_QUANTITY:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCart);

  const calculateTotals = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    });
    return { totalQuantity, totalPrice };
  };

  const { totalQuantity, totalPrice } = calculateTotals();

  const handleAddItem = (id, name, price) => {
    dispatch({
      type: actionTypes.ADD_ITEM,
      payload: { id, name, quantity: 1, price },
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: actionTypes.REMOVE_ITEM, payload: { id } });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch({
        type: actionTypes.UPDATE_QUANTITY,
        payload: { id, quantity },
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Shopping Cart</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">${item.price}</td>
                <td className="px-4 py-2 border">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 text-center border rounded-md"
                  />
                </td>
                <td className="px-4 py-2 border">${(item.quantity * item.price).toFixed(2)}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Total Quantity: {totalQuantity}</h2>
        <h2 className="text-2xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>

      <div className="mt-6">
        <h2 className="text-xl">Add New Item</h2>
        <button
          onClick={() => handleAddItem('3', 'Orange', 2)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 mt-2 mr-4"
        >
          Add Orange ($2)
        </button>
        <button
          onClick={() => handleAddItem('4', 'Grapes', 3)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 mt-2"
        >
          Add Grapes ($3)
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
