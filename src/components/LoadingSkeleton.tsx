import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6'>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse'
        >
          <div className='p-4'>
            <div className='w-24 h-24 mx-auto bg-gray-200 rounded-lg mb-4'></div>
            <div className='text-center'>
              <div className='h-4 bg-gray-200 rounded w-20 mx-auto mb-2'></div>
              <div className='h-3 bg-gray-200 rounded w-12 mx-auto mb-3'></div>
              <div className='flex justify-center space-x-1'>
                <div className='w-3 h-3 bg-gray-200 rounded-full'></div>
                <div className='w-3 h-3 bg-gray-200 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
