import React, {useEffect, useState} from 'react';
import tmdb from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';


export default function HomePage(){
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);


useEffect(()=>{
setLoading(true);
tmdb.get('/trending/movie/day')
.then(r=> setMovies(r.data.results || []))
.catch(console.error)
.finally(()=> setLoading(false));
},[]);


return (
<section>
<h1 className={`${styles.title} neon`}>Trending Today</h1>
{loading ? <p className="card">Loading trending...</p> : <MovieList movies={movies} />}
</section>
);
}