import React, { useContext } from 'react';
import { WishListContext } from '../../Context/WishListContext';
import { CartContext } from '../../Context/CartContext';
import Loading from '../Loading/Loading';

export default function WishList() {
  const { wishList, loading, RemoveProductFromWishList } = useContext(WishListContext);
  const { AddProductToCart } = useContext(CartContext);

  if (loading) return <Loading />;

  return (
    <>
      <h1 className="text-3xl text-main font-serif font-semibold text-center py-3">Wish List</h1>
      {wishList && wishList.data.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full lg:w-4/5 mx-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 text-center font-semibold">
              <tr>
                <th scope="col" className="px-4 py-3">Image</th>
                <th scope="col" className="px-4 py-3">Product</th>
                <th scope="col" className="px-4 py-3">Price</th>
                <th scope="col" className="px-4 py-3">Action</th>
                <th scope="col" className="px-4 py-3">Cart</th>
              </tr>
            </thead>
            <tbody>
              {wishList.data.map((product, i) => (
                <tr key={i} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={product.imageCover}
                      className="w-16 md:w-32 h-auto object-cover"
                      alt={product.title}
                    />
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-900">{product.title}</td>
                  <td className="px-4 py-4 font-semibold text-center text-gray-900">{product.price} EGP</td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => RemoveProductFromWishList(product.id)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => AddProductToCart(product.id)}
                      className="font-medium bg-main text-white rounded py-2 px-3"
                    >
                      + Add To Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 py-4">Your wish list is empty.</p>
      )}
    </>
  );
}
