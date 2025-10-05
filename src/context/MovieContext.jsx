import { createContext, useContext, useState, useMemo  } from "react"

// Create Context
const MovieContext = createContext()

// Create Provider Component
export const MovieProvider = ({children})=>{
    const [favorites, setFavorites] = useState([])

    function isFavorite(movieId){
        return favorites.some((movie)=> {
            return movie.id == movieId
        })
    }

    function addToFavorites(movie){
        if(isFavorite(movie.id)) return
        setFavorites([...favorites, movie])
        console.log(favorites);
    }


    const value = {
          favorites,
          addToFavorites,
          isFavorite
    }
    return (
        <MovieContext.Provider value ={value}>
            {children}
        </MovieContext.Provider>
    )
}

export const useFavorite = ()=>{
    const context = useContext(MovieContext)

    if (!context){
        throw new Error('error')
    }

    return context
}




