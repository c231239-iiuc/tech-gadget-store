import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProductById(id).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/" className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <div className="flex flex-col-reverse">
          <div className="w-full aspect-w-1 aspect-h-1">
            <img
              src={product.images[0] || product.thumbnail}
              alt={product.title}
              className="w-full h-full object-center object-cover sm:rounded-lg"
            />
          </div>
          <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <div className="grid grid-cols-4 gap-6">
              {product.images.slice(0, 4).map((img, idx) => (
                <div key={idx} className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50">
                   <img src={img} alt="" className="w-full h-full object-center object-cover rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.title}</h1>
          
          <div className="mt-3">
            <p className="text-3xl text-gray-900">${product.price}</p>
          </div>

          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex items-center">
                 <span className="text-yellow-400">★</span>
                 <span className="ml-1 text-sm text-gray-500">{product.rating} / 5</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-gray-700 space-y-6">
              <p>{product.description}</p>
            </div>
          </div>

          <div className="mt-6">
             <div className="text-sm font-medium text-gray-500">Brand: <span className="text-gray-900">{product.brand}</span></div>
             <div className="text-sm font-medium text-gray-500 mt-1">Category: <span className="text-gray-900">{product.category}</span></div>
          </div>

          <div className="mt-10 flex sm:flex-col1">
            <button
              type="button"
              className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;