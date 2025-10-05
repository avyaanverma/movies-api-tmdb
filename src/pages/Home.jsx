import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'
import { getPopularMovies, searchMovies } from '../services/api'

export default function Home(){
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([
    {id: 1, title: "Inception", release_date: "2010-07-16"},
    {id: 2, title: "The Dark Knight", release_date: "2008-07-18"},
    {id: 3, title: "Interstellar", release_date: "2014-11-07"},
    {id: 4, title: "Mahabharat", release_date: "2025-03-24"}
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)



  useEffect(() => {
    const loadPopularMovies = async ()=>{
      try{
        setLoading(true)
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies)
        console.log(popularMovies);
        
      }catch(err){
        setLoading(false)
        console.log(err)
        setError("Failed to Load Movies........")
        set
      }finally{
        setLoading(false)
  
      }
    }

    loadPopularMovies();
  }, [])
  

  async function handleSearch(e){
    e.preventDefault();

    if(!search ) return
    if(loading) return

    setLoading(true)
    try{
      const results = await searchMovies(search);
      setMovies(results);
      setError(null)
    } catch(err){
      console.log(err);
      setError("Error in fetching Movies")
    } finally {
      console.log("Movied fetched Success.");
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar/>
      <div id='search-bar'>
        <input  
        type="text"
        onChange={(e)=>{
          setSearch(e.target.value)
        }} 
        placeholder='Search for a movie...' />
        <input 
        type='submit'
        onClick={(e)=>{
          handleSearch(e)
        }}
        ></input>
      </div>

      {error && (
        <div className='Error-div'>
          {error}
        </div>
      )}

      {loading ? (
        <div>
          Bringing your Favourite Movies......
        </div>
      ) : (
      <div className='movie-container'>
        {movies.map((movie) => (
          
            <MovieCard movie = {movie} />
          
        ))}
      </div>
      )}
    </>
  )
}
