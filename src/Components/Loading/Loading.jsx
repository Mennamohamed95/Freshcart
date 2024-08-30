import React from 'react';
import style from './Loading.module.css';

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 bg-opacity-75 z-30 fixed top-0 left-0">
      <div className="flex flex-col items-center">
        <i className="fas fa-spinner fa-spin fa-3x text-gray-500" aria-label="Loading"></i>
        <p className="mt-4 text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );
}