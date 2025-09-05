import { X } from 'lucide-react';
import React, { useCallback, useEffect } from 'react';
import { usePokemonDetails } from '../hooks/usePokemon';
import { getTypeColor } from '../utils/pokemonApi';
import { LoadingSpinner } from './LoadingSpinner';

interface PokemonModalProps {
  pokemonName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const PokemonModal: React.FC<PokemonModalProps> = React.memo(
  ({ pokemonName, isOpen, onClose }) => {
    const { pokemon, loading, error, fetchPokemonDetails } =
      usePokemonDetails();

    const handleRetry = useCallback(() => {
      fetchPokemonDetails(pokemonName);
    }, [fetchPokemonDetails, pokemonName]);

    useEffect(() => {
      if (isOpen && pokemonName) {
        fetchPokemonDetails(pokemonName);
      }
    }, [isOpen, pokemonName, fetchPokemonDetails]);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
        <div className='bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative'>
          {/* Close Button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10'
          >
            <X className='h-5 w-5 text-gray-600' />
          </button>

          {loading && (
            <div className='p-8'>
              <LoadingSpinner />
            </div>
          )}

          {error && (
            <div className='p-8 text-center'>
              <p className='text-red-500 mb-4'>{error}</p>
              <button
                onClick={handleRetry}
                className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200'
              >
                Try Again
              </button>
            </div>
          )}

          {pokemon && !loading && (
            <div className='p-6'>
              {/* Pokemon Image */}
              <div className='text-center mb-6'>
                <img
                  src={
                    pokemon.sprites.other['official-artwork'].front_default ||
                    pokemon.sprites.front_default
                  }
                  alt={pokemon.name}
                  className='w-32 h-32 mx-auto object-contain'
                />
              </div>

              {/* Pokemon Name and ID */}
              <div className='text-center mb-6'>
                <h2 className='text-2xl font-bold text-gray-900 capitalize mb-1'>
                  {pokemon.name}
                </h2>
                <p className='text-gray-500 font-medium'>
                  #{pokemon.id.toString().padStart(3, '0')}
                </p>
              </div>

              {/* Types */}
              <div className='mb-6'>
                <h3 className='text-sm font-medium text-gray-700 mb-2'>Type</h3>
                <div className='flex space-x-2'>
                  {pokemon.types.map((type, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                      <div
                        className='w-3 h-3 rounded-full'
                        style={{
                          backgroundColor: getTypeColor(type.type.name),
                        }}
                      />
                      <span className='text-sm font-medium capitalize text-gray-700'>
                        {type.type.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Physical Stats */}
              <div className='grid grid-cols-2 gap-4 mb-6'>
                <div>
                  <h3 className='text-sm font-medium text-gray-700 mb-1'>
                    Height
                  </h3>
                  <p className='text-lg font-semibold text-gray-900'>
                    {(pokemon.height / 10).toFixed(1)} m
                  </p>
                </div>
                <div>
                  <h3 className='text-sm font-medium text-gray-700 mb-1'>
                    Weight
                  </h3>
                  <p className='text-lg font-semibold text-gray-900'>
                    {(pokemon.weight / 10).toFixed(1)} kg
                  </p>
                </div>
              </div>

              {/* Abilities */}
              <div>
                <h3 className='text-sm font-medium text-gray-700 mb-2'>
                  Abilities
                </h3>
                <div className='space-y-2'>
                  {pokemon.abilities.slice(0, 3).map((ability, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                      <div className='w-2 h-2 bg-red-500 rounded-full' />
                      <span className='text-sm capitalize text-gray-700'>
                        {ability.ability.name.replace('-', ' ')}
                      </span>
                      {ability.is_hidden && (
                        <span className='text-xs bg-gray-100 px-2 py-1 rounded text-gray-600'>
                          Hidden
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);
