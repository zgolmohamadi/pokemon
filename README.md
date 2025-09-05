# 🎮 Pokédx - Complete Pokemon Explorer

A modern, responsive Pokemon encyclopedia built with React and TypeScript. Explore the world of Pokemon with beautiful UI, real-time search, and detailed information for each Pokemon.

![Pokédx Screenshot](https://images.unsplash.com/photo-1606963954334-c2ac98cb2d5c?w=800&h=400&fit=crop&crop=center)

## ✨ Features

### 🏠 Main Features

- **Pokemon Grid Display** - Browse Pokemon in a beautiful responsive grid layout
- **Real-time Search** - Instantly filter Pokemon by name as you type
- **Pagination** - Navigate through Pokemon with Previous/Next controls
- **Detailed Modal View** - Click any Pokemon to see comprehensive details
- **Responsive Design** - Perfect experience on mobile, tablet, and desktop
- **Type Indicators** - Visual type badges with official Pokemon colors

### 🚀 Advanced Features

- **Performance Optimized** - Uses React.memo, useMemo, and useCallback for optimal performance
- **Loading States** - Beautiful skeleton loaders and spinners
- **Error Handling** - Graceful error messages with retry functionality
- **TypeScript Support** - Full type safety throughout the application
- **Custom Hooks** - Reusable logic with usePokemon and usePokemonDetails hooks

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: PokéAPI (https://pokeapi.co/)
- **Code Quality**: ESLint with TypeScript rules

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pokedx-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ErrorMessage.tsx     # Error display component
│   ├── LoadingSkeleton.tsx  # Loading placeholder
│   ├── LoadingSpinner.tsx   # Loading spinner
│   ├── PaginationControls.tsx # Navigation controls
│   ├── PokemonCard.tsx      # Individual Pokemon card
│   ├── PokemonGrid.tsx      # Pokemon grid layout
│   ├── PokemonModal.tsx     # Pokemon details modal
│   └── SearchBar.tsx        # Search input component
├── hooks/               # Custom React hooks
│   └── usePokemon.ts       # Pokemon data management
├── types/               # TypeScript type definitions
│   └── pokemon.ts          # Pokemon-related types
├── utils/               # Utility functions
│   └── pokemonApi.ts       # API interaction functions
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Usage Guide

### Browsing Pokemon

- The main page displays Pokemon in a grid layout
- Each card shows the Pokemon's image, name, ID, and type indicators
- Use the Previous/Next buttons to navigate through different pages

### Searching Pokemon

- Use the search bar at the top to filter Pokemon by name
- Search results update in real-time as you type
- Clear the search to return to the paginated view

### Viewing Pokemon Details

- Click on any Pokemon card to open the detailed modal
- The modal displays:
  - High-resolution Pokemon artwork
  - Pokemon name and Pokédex number
  - Type information with colored indicators
  - Physical stats (height and weight)
  - List of abilities (including hidden abilities)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Design Features

### Color Scheme

- **Primary Red**: `#EF4444` (Header and primary buttons)
- **Success Green**: `#10B981` (Next button)
- **Background**: `#F9FAFB` (Light gray background)
- **Cards**: White with subtle shadows

### Typography

- Clean, modern font stack
- Proper hierarchy with varied font weights
- Optimal line spacing for readability

### Responsive Breakpoints

- **Mobile**: 1 column grid
- **Tablet**: 2-3 column grid
- **Desktop**: 4-5 column grid
- **Large Desktop**: 5+ column grid

## ⚡ Performance Optimizations

### React Optimizations

- **React.memo**: Prevents unnecessary component re-renders
- **useCallback**: Memoizes event handlers for stable references
- **useMemo**: Optimizes expensive computations like filtering
- **Lazy Loading**: Images load only when needed

### API Optimizations

- **Batch Requests**: Efficiently fetches Pokemon details in batches
- **Error Handling**: Graceful fallbacks for failed API calls
- **Loading States**: Provides immediate feedback during data fetching

## 🌐 API Integration

The application uses the free PokéAPI (https://pokeapi.co/) which provides:

- Complete Pokemon database
- High-quality Pokemon artwork
- Detailed stats and information
- No authentication required

### Key Endpoints Used

- `GET /pokemon` - List of Pokemon with pagination
- `GET /pokemon/{id}` - Detailed Pokemon information

## 🐛 Error Handling

The application includes comprehensive error handling:

- **Network Errors**: Displays retry buttons for failed requests
- **Missing Data**: Graceful fallbacks for incomplete Pokemon data
- **Loading States**: Clear indicators during data fetching
- **User Feedback**: Informative error messages

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

---

**Made with ❤️ and ⚡ by Pokemon fans, for Pokemon fans**
