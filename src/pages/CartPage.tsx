import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
          <p className="text-gray-600 mb-8">Your cart is currently empty.</p>
          <a 
            href="/products" 
            className="inline-flex items-center text-black font-medium hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" />
            Continue Shopping
          </a>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border-b border-gray-200 pb-4 mb-4 hidden md:grid md:grid-cols-12 gap-4 text-sm text-gray-500">
              <div className="md:col-span-6">Product</div>
              <div className="md:col-span-2 text-center">Price</div>
              <div className="md:col-span-2 text-center">Quantity</div>
              <div className="md:col-span-2 text-right">Total</div>
            </div>
            
            {cartItems.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="py-6 border-b border-gray-200">
                <div className="md:grid md:grid-cols-12 gap-4 flex flex-wrap">
                  {/* Product */}
                  <div className="md:col-span-6 flex items-center">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                      <button 
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-sm text-gray-500 flex items-center mt-2 hover:text-black"
                      >
                        <X size={16} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="md:col-span-2 flex items-center justify-center text-center py-2 md:py-0">
                    <div className="md:hidden text-sm text-gray-500 mr-2">Price:</div>
                    ${item.product.price.toFixed(2)}
                  </div>
                  
                  {/* Quantity */}
                  <div className="md:col-span-2 flex items-center justify-center py-2 md:py-0">
                    <div className="md:hidden text-sm text-gray-500 mr-2">Quantity:</div>
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.size, Math.max(1, item.quantity - 1))}
                        className="border border-gray-300 px-2 py-1 text-sm"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => updateQuantity(item.product.id, item.size, Math.max(1, parseInt(e.target.value) || 1))}
                        className="border-y border-gray-300 w-10 py-1 text-center text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="border border-gray-300 px-2 py-1 text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="md:col-span-2 flex items-center justify-end py-2 md:py-0">
                    <div className="md:hidden text-sm text-gray-500 mr-2">Total:</div>
                    <div className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-8">
              <a 
                href="/products" 
                className="inline-flex items-center text-black font-medium hover:underline"
              >
                <ArrowLeft size={16} className="mr-2" />
                Continue Shopping
              </a>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => alert('Checkout process would start here')}
              >
                Checkout
              </Button>
              
              <div className="mt-4 text-sm text-gray-500 text-center">
                Secure checkout powered by Stripe
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;