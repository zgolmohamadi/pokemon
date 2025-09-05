import React from 'react';
import type { PokemonCard as PokemonCardType } from '../types/pokemon';
import { getTypeColor } from '../utils/pokemonApi';

interface PokemonCardProps {
  pokemon: PokemonCardType;
  onClick: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = React.memo(
  ({ pokemon, onClick }) => {
    return (
      <div
        onClick={onClick}
        className='bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-100 overflow-hidden'
      >
        <div className='p-4'>
          {/* Pokemon Image */}
          <div className='relative mb-4'>
            {pokemon.image ? (
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className='w-24 h-24 mx-auto object-contain'
                loading='lazy'
              />
            ) : (
              <div className='w-24 h-24 mx-auto bg-gray-200 rounded-lg flex items-center justify-center'>
                <span className='text-gray-400 text-xs'>No Image</span>
              </div>
            )}
          </div>

          {/* Pokemon Info */}
          <div className='text-center'>
            <h3 className='font-semibold text-gray-900 capitalize mb-1'>
              {pokemon.name}
            </h3>
            <p className='text-sm text-gray-500 mb-3'>
              #{pokemon.id.toString().padStart(3, '0')}
            </p>

            {/* Type Indicators */}
            <div className='flex justify-center space-x-1'>
              {pokemon.types.map((type, index) => (
                <div
                  key={index}
                  className='w-3 h-3 rounded-full border border-white shadow-sm'
                  style={{ backgroundColor: getTypeColor(type) }}
                  title={type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
