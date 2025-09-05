import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

interface PaginationControlsProps {
  hasNext: boolean;
  hasPrevious: boolean;
  onNext: () => void;
  onPrevious: () => void;
  currentPage: number;
}

export const PaginationControls: React.FC<PaginationControlsProps> = React.memo(
  ({ hasNext, hasPrevious, onNext, onPrevious, currentPage }) => {
    return (
      <div className='flex items-center justify-center space-x-4 mb-6'>
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
            hasPrevious
              ? 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className='h-4 w-4' />
          <span>Previous</span>
        </button>

        <div className='px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium'>
          Page {currentPage + 1}
        </div>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
            hasNext
              ? 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span>Next</span>
          <ChevronRight className='h-4 w-4' />
        </button>
      </div>
    );
  }
);
