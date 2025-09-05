import React, { useMemo } from 'react';
import type { PokemonCard as PokemonCardType } from '../types/pokemon';
import { PokemonCard } from './PokemonCard';

interface PokemonGridProps {
  pokemon: PokemonCardType[];
  onPokemonClick: (pokemonName: string) => void;
}

export const PokemonGrid: React.FC<PokemonGridProps> = React.memo(
  ({ pokemon, onPokemonClick }) => {
    const pokemonCards = useMemo(() => {
      return pokemon.map((poke) => (
        <PokemonCard
          key={poke.id}
          pokemon={poke}
          onClick={() => onPokemonClick(poke.name)}
        />
      ));
    }, [pokemon, onPokemonClick]);

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6'>
        {pokemonCards}
      </div>
    );
  }
);
