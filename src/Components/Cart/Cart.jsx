import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, loading, updateProductCount, deleteProduct } = useContext(CartContext);

  if (loading) return <Loading />;

  const handleDecrease = (productId, count) => {
    if (count > 1) updateProductCount(productId, count - 1);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center py-3">Cart</h1>
      {cart && cart.data.products.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full lg:w-4/5 mx-auto">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 font-semibold">
              <tr>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-4 py-3">Product</th>
                <th scope="col" className="px-4 py-3">Qty</th>
                <th scope="col" className="px-4 py-3">Price</th>
                <th scope="col" className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.data.products.map((product, i) => (
                <tr key={i} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={product.product.imageCover}
                      className="w-16 md:w-32 h-auto object-cover"
                      alt={product.product.title}
                    />
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-900">{product.product.title}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => handleDecrease(product.product.id, product.count)}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Decrease quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <span>{product.count}</span>
                      </div>
                      <button
                        onClick={() => updateProductCount(product.product.id, product.count + 1)}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Increase quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-900">{product.price} EGP</td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => deleteProduct(product.product.id)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="py-3 text-xl font-semibold text-gray-700">
                <td className="py-3 px-6" colSpan={3}>Total products price:</td>
                <td className="py-3 px-6">{cart.data.totalCartPrice} EGP</td>
              </tr>
            </tfoot>
          </table>
          <Link to="/checkout" className="block text-center bg-main text-white py-2 px-4 rounded-md mt-4">
            Check Out
          </Link>
        </div>
      ) : (
        <p className="text-center text-gray-500 py-4">Your cart is empty.</p>
      )}
    </>
  );
}
