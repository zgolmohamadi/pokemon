const BASE_URL = 'https://pokeapi.co/api/v2';

export const pokemonApi = {
  getPokemonList: async (offset: number = 0, limit: number = 20) => {
    const response = await fetch(
      `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon list');
    }
    return response.json();
  },

  getPokemonDetails: async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon details');
    }
    return response.json();
  },

  getPokemonByName: async (name: string) => {
    const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon');
    }
    return response.json();
  },
};

export const extractIdFromUrl = (url: string): number => {
  const matches = url.match(/pokemon\/(\d+)\//);
  return matches ? parseInt(matches[1]) : 0;
};

export const getTypeColor = (type: string): string => {
  const colors: { [key: string]: string } = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  return colors[type] || '#68A090';
};
