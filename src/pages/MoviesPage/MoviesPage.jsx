import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import tmdb from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

export default function MoviesPage(){
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  const [query, setQuery] = useState(queryParam);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(!queryParam) return;
    setLoading(true);
    tmdb.get(`/search/movie?query=${encodeURIComponent(queryParam)}&include_adult=false`)
      .then(r=> setMovies(r.data.results || []))
      .catch(console.error)
      .finally(()=> setLoading(false));
  },[queryParam]);

  const onSubmit = e =>{
    e.preventDefault();
    if(!query.trim()) return;
    setSearchParams({ query: query.trim() });
  }

  return (
    <section>
      <h1 className={`${styles.title} neon`}>Search Movies</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <input value={query} onChange={e=>setQuery(e.target.value)} className={styles.input} placeholder="Search movies..." />
        <button className={styles.btn}>Search</button>
      </form>

      {loading ? <p className="card">Searching...</p> : <MovieList movies={movies} />}
    </section>
  );
}