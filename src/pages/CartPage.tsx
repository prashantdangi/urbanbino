import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="pb-16">
      {/* Navigation */}
      <div className="sticky top-0 bg-white z-10 p-4 border-b">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button onClick={() => navigate('/')}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="p-1"
                      >
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Size: {item.size}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, item.quantity - 1)
                          }
                          className="w-8 h-8 border rounded-full flex items-center justify-center"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, item.quantity + 1)
                          }
                          className="w-8 h-8 border rounded-full flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-semibold">₹{cartTotal}</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;