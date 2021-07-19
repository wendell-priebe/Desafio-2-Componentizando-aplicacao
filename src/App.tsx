import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {

  const [movies, setMovies] = useState<MovieProps[]>([])
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps)

  function handleSelectedGenre(genre: GenreResponseProps){
    setSelectedGenre(genre)
  }

  function handleSetMovies(movie: MovieProps[]){
    setMovies(movie)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onSetMovies={handleSetMovies} onSetSelectedGenre={handleSelectedGenre} />
      <Content movies={movies} selectedGenre={selectedGenre} />
      
    </div>
  )
}