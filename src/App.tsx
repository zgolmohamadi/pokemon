import { useCallback, useState } from 'react';
import { ErrorMessage } from './components/ErrorMessage';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { PaginationControls } from './components/PaginationControls';
import { PokemonGrid } from './components/PokemonGrid';
import { PokemonModal } from './components/PokemonModal';
import { SearchBar } from './components/SearchBar';
import { usePokemon } from './hooks/usePokemon';

function App() {
  const {
    pokemonList,
    loading,
    error,
    hasNext,
    hasPrevious,
    searchQuery,
    handleSearch,
    goToNextPage,
    goToPreviousPage,
    currentPage,
  } = usePokemon();

  const [selectedPokemon, setSelectedPokemon] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePokemonClick = useCallback((pokemonName: string) => {
    setSelectedPokemon(pokemonName);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedPokemon('');
  }, []);

  const handleRetry = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-red-500 text-white py-6 shadow-lg'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold text-center'>Pokédx</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-8'>
        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={handleSearch} />

        {/* Pagination Controls */}
        {!searchQuery && (
          <PaginationControls
            hasNext={hasNext}
            hasPrevious={hasPrevious}
            onNext={goToNextPage}
            onPrevious={goToPreviousPage}
            currentPage={currentPage}
          />
        )}

        {/* Content Area */}
        {loading && <LoadingSkeleton />}

        {error && !loading && (
          <ErrorMessage message={error} onRetry={handleRetry} />
        )}

        {!loading && !error && pokemonList.length === 0 && searchQuery && (
          <div className='text-center py-12'>
            <p className='text-gray-500'>
              No Pokemon found matching "{searchQuery}"
            </p>
          </div>
        )}

        {!loading && !error && pokemonList.length > 0 && (
          <PokemonGrid
            pokemon={pokemonList}
            onPokemonClick={handlePokemonClick}
          />
        )}

        {/* Bottom Pagination (for better UX on mobile) */}
        {!searchQuery && !loading && pokemonList.length > 0 && (
          <div className='mt-8'>
            <PaginationControls
              hasNext={hasNext}
              hasPrevious={hasPrevious}
              onNext={goToNextPage}
              onPrevious={goToPreviousPage}
              currentPage={currentPage}
            />
          </div>
        )}
      </main>

      {/* Pokemon Details Modal */}
      <PokemonModal
        pokemonName={selectedPokemon}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
