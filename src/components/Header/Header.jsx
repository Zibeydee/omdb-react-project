import React, { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import style from '../Header/Header.module.css';
import MovieContext from '../MovieContext/MovieContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

function Header() {
  const { setMovie } = useContext(MovieContext);


  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      setMovie(e.target.value)
    }
  }

  return (
    <div className={style.navBar}>
      <div className={style.netflixLogo}>
        <h1 className={style.logo}>NETFLIX</h1>
      </div>
      <NavBar />
      <div className={style.inputcontainer}>
        <input type="text" className={style.input} placeholder="Search..." onKeyDown={handleKeyDown} />
        <FontAwesomeIcon icon={faSearch} className={style.icon} /> 
      </div>
    </div>
  );
}

export default Header;
