import React, { useContext, useEffect, useState } from 'react';
import MovieContext from '../../components/MovieContext/MovieContext';
import {Link} from 'react-router-dom'
import style from '../Movies/Movies.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import axios from 'axios';

function Movies() {
  const { movie, setSelectedMovie } = useContext(MovieContext);
  const [movieData, setMovieData] = useState(null);
  const ApiKey = '7d1ee667';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${ApiKey}&s=${movie}`);
        setMovieData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [movie, ApiKey]);

  const handleMovieSelect = (movieItem) => {
    setSelectedMovie(movieItem);
    
  };

  let content;
  if (movieData && movieData.Search) {
    content = (
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className={style.mySwiper}
      >
        {movieData.Search.map((movieItem) => (
          <SwiperSlide key={movieItem.imdbID}>
            <div className={style.aboutMovie}>
              <h1 className={style.title}>Title: {movieItem.Title}</h1>
              <span className={style.year}>Year: {movieItem.Year}</span>
              <button className={style.button} onClick={() => handleMovieSelect(movieItem)}><Link to='/'>Go to Movie</Link></button>
              <p className={style.type}>Type: {movieItem.Type}</p>
              <img className={style.poster} src={movieItem.Poster} alt={movieItem.Title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else {
    content = <p>No movies found</p>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Movies;
