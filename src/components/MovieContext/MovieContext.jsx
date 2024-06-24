import React, { createContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <MovieContext.Provider value={{ movie, setMovie, selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
