import React from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, fetch order details by ID. Here we just mock the UI.
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Order Details</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Order ID: {id}</p>
          </div>
          <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
            &larr; Back to Dashboard
          </Link>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Order Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Delivered
                </span>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Shipping Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                123 Tech Street, Silicon Valley, CA 94000
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Items</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">Wireless Headphones x 1</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="font-medium">$129.99</span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
              <dt className="text-base font-medium text-gray-900">Total Amount</dt>
              <dd className="mt-1 text-base font-bold text-gray-900 sm:mt-0 sm:col-span-2">$129.99</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;