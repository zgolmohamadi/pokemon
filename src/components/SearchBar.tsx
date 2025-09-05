import { Search } from 'lucide-react';
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = React.memo(
  ({ value, onChange }) => {
    return (
      <div className='relative w-full max-w-md mx-auto mb-6'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <Search className='h-5 w-5 text-gray-400' />
        </div>
        <input
          type='text'
          placeholder='Search Pokemon...'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 text-gray-900 placeholder-gray-500'
        />
      </div>
    );
  }
);
