import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className='flex justify-center items-center py-12'>
      <div className='relative'>
        <div className='w-12 h-12 border-4 border-gray-200 rounded-full'></div>
        <div className='absolute top-0 left-0 w-12 h-12 border-4 border-red-500 rounded-full animate-spin border-t-transparent'></div>
      </div>
    </div>
  );
};
