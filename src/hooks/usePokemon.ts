import { useCallback, useEffect, useState } from 'react';

import type {
  Pokemon,
  PokemonCard,
  PokemonListResponse,
} from '../types/pokemon';
import { extractIdFromUrl, pokemonApi } from '../utils/pokemonApi';

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<PokemonCard[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPokemonList = useCallback(async (offset: number) => {
    try {
      setLoading(true);
      setError('');

      const response: PokemonListResponse = await pokemonApi.getPokemonList(
        offset,
        20
      );

      // Fetch details for each Pokemon to get images and types
      const pokemonDetails = await Promise.all(
        response.results.map(async (pokemon) => {
          try {
            const details: Pokemon = await pokemonApi.getPokemonDetails(
              pokemon.url
            );
            return {
              id: details.id,
              name: details.name,
              image:
                details.sprites.other['official-artwork'].front_default ||
                details.sprites.front_default,
              types: details.types.map((t) => t.type.name),
            };
          } catch (error) {
            console.error(
              `Failed to fetch details for ${pokemon.name}:`,
              error
            );
            return {
              id: extractIdFromUrl(pokemon.url),
              name: pokemon.name,
              image: '',
              types: [],
            };
          }
        })
      );

      setPokemonList(pokemonDetails);
      setFilteredPokemon(pokemonDetails);
      setHasNext(!!response.next);
      setHasPrevious(!!response.previous);
    } catch (err) {
      setError('Failed to load Pokemon. Please try again.');
      console.error('Error fetching Pokemon list:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Memoize filtered results
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return pokemonList;
    }
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [pokemonList, searchQuery]);

  // Update filtered pokemon when results change
  useEffect(() => {
    setFilteredPokemon(filteredResults);
  }, [filteredResults]);

  const goToNextPage = useCallback(() => {
    if (hasNext) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchPokemonList(nextPage * 20);
    }
  }, [hasNext, currentPage, fetchPokemonList]);

  const goToPreviousPage = useCallback(() => {
    if (hasPrevious) {
      const prevPage = Math.max(0, currentPage - 1);
      setCurrentPage(prevPage);
      fetchPokemonList(prevPage * 20);
    }
  }, [hasPrevious, currentPage, fetchPokemonList]);

  useEffect(() => {
    fetchPokemonList(0);
  }, [fetchPokemonList]);

  return {
    pokemonList: filteredPokemon,
    loading,
    error,
    hasNext,
    hasPrevious,
    searchQuery,
    handleSearch,
    goToNextPage,
    goToPreviousPage,
    currentPage,
  };
};

export const usePokemonDetails = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchPokemonDetails = useCallback(async (name: string) => {
    try {
      setLoading(true);
      setError('');
      setPokemon(null);

      const details = await pokemonApi.getPokemonByName(name);
      setPokemon(details);
    } catch (err) {
      setError('Failed to load Pokemon details.');
      console.error('Error fetching Pokemon details:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    pokemon,
    loading,
    error,
    fetchPokemonDetails,
  };
};
