import React from 'react'
import './MovieCard.css'
import { useFavorite } from '../context/MovieContext'

const MovieCard = ({movie}) => {
  const { isFavorite, addToFavorites } = useFavorite();
  
  return (
    <div className='movie-card' key={movie.id}>
      
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        <div className="movies-overlay">
          <button 
          onClick={(e)=>{
            addToFavorites(movie)
          }}
          className="favourites-btn">
            {isFavorite(movie.id) ? (
              <p>🤍</p>
            ):(
              <p>❤️</p>
            )}
          </button>
        </div>
        <h2>{movie.original_title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>{movie.overview}</p>
        <p>Movie ID: {movie.id}</p>
    </div>
  )
}

export default MovieCard