import React, { useContext } from 'react';
import MovieContext from '../../components/MovieContext/MovieContext';
import style from './Home.module.css';

function Home() {
  const { selectedMovie } = useContext(MovieContext);

  let content;
  if (selectedMovie) {
    content = (
      <div className={style.selectedMovie}>
        <h2>Selected Movie Details</h2>
        <div className={style.aboutMovie}>
          <h1 className={style.title}>Title: {selectedMovie.Title}</h1>
          <span className={style.year}>Year: {selectedMovie.Year}</span>
          <p className={style.type}>Type: {selectedMovie.Type}</p>
          <img className={style.poster} src={selectedMovie.Poster} alt={selectedMovie.Title} />
        </div>
      </div>
    );
  } else {
    <p>No movie selected</p>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Home;
