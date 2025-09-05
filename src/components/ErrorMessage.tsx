import { AlertCircle } from 'lucide-react';
import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
}) => {
  return (
    <div className='flex flex-col items-center justify-center py-12 text-center'>
      <AlertCircle className='h-12 w-12 text-red-500 mb-4' />
      <p className='text-gray-600 mb-4 max-w-md'>{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className='px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200'
        >
          Try Again
        </button>
      )}
    </div>
  );
};
