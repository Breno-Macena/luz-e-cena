import { useEffect, useState } from "react"
import type { Movie } from "../types"

const useFilterMovies = (movies: Movie[]) => {
  const [serachTerm, setSearchTerm] = useState<string>("")
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  const handleSearch = () => {
    const filtered = movies.filter((movie) => (
      movie.titulo.toLocaleLowerCase().includes(serachTerm.toLocaleLowerCase())
    ))
    setFilteredMovies(filtered)
  }

  return {serachTerm, setSearchTerm, filteredMovies, handleSearch}
}

export default useFilterMovies
