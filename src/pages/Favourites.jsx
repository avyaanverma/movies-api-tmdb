import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import "./Favourites.css"
import { useFavorite } from "../context/MovieContext"
import MovieCard from "../components/MovieCard";

export default function Favourites() {
  const {favorites} = useFavorite();
  return (
    <div >
       <Navbar/>
       <div className="favourites-div">
        
          {favorites.length == 0 ? (
            <div className="favourites">
              <h1>No Favourite Movies Yet</h1>
              <p>Start adding movies to the favourites and they will appear here.</p>
            </div>
          ): (
              <div>
                {
                  favorites.map( movie => (
                  <MovieCard movie={movie}/>
                ))
                }
              </div>
          )}
       </div>
    </div>
  )
}

