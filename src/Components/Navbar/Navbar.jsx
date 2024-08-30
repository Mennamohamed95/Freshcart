import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';
import style from './Navbar.module.css';
import logo from '../../assets/images/freshcart-logo.svg';

export default function Navbar() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function logOut() {
    localStorage.removeItem('user Token');
    setUserData(null);
    navigate('/login');
  }

  return (
    <nav className={`bg-gray-200 md:fixed top-0 inset-x-0 py-2 sticky text-center capitalize px-4 md:px-8 z-50 ${style.navbar}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500">
        <div className='flex justify-between items-center w-full md:w-auto'>
          <img src={logo} width={120} alt="Freshcart Logo" />

        
          <button 
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-700 hover:border-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        
        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className='flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0'>
            {userData && (
              <>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="products">Products</NavLink></li>
                <li><NavLink to="wishList">Wish List</NavLink></li>
                <li><NavLink to="categories">Categories</NavLink></li>
                <li><NavLink to="brands">Brands</NavLink></li>
              </>
            )}
          </ul>
        </div>

        <div className='flex items-center md:space-x-4 mt-2 md:mt-0'>
          <ul className='flex flex-col md:flex-row space-x-2'>
            {userData ? (
              <>
                <li className='relative'>
                  <NavLink to="cart">
                    <i className="fa-solid fa-cart-shopping fa-2xl text-main"></i>
                  </NavLink>
                  <span className='text-white text-sm absolute left-1/2 top-[-3px]'>
                    {cart?.numOfCartItems || 0}
                  </span>
                </li>
                <li onClick={logOut} className='mx-2 text-gray-500 cursor-pointer'>Logout</li>
              </>
            ) : (
              <>
                <li className='mx-2 text-gray-500 cursor-pointer'><NavLink to="login">Login</NavLink></li>
                <li className='mx-2 text-gray-500 cursor-pointer'><NavLink to="register">Register</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
