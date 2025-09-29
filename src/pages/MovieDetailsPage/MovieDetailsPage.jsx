import React, {useEffect, useState, useRef} from 'react';
import { useParams, useLocation, Link, Routes, Route } from 'react-router-dom';
import tmdb from '../../api/tmdb';
import getPosterUrl from '../../utils/getPosterUrl';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';
export default function MovieDetailsPage(){
const { movieId } = useParams();
const location = useLocation();
const backRef = useRef(location.state?.from ?? '/movies');
const [movie, setMovie] = useState(null);
const [loading, setLoading] = useState(false);
useEffect(()=>{
setLoading(true);
tmdb.get(`/movie/${movieId}`).then(r=>
setMovie(r.data)).catch(console.error).finally(()=>setLoading(false));
},[movieId]);
if(loading) return <p className="card">Loading movie details...</p>;
if(!movie) return null;
return (
<section>
<Link to={backRef.current} className={styles.back}>← Go back</Link>
<div className={styles.top}>
<img className={styles.poster} src={getPosterUrl(movie.poster_path)}
alt={movie.title} />
<div className={styles.meta}>
<h2 className={`${styles.title} neon`}>{movie.title}</h2>
<p className={styles.subtitle}>{movie.release_date} • {movie.runtime}
min</p>
<p className={styles.overview}>{movie.overview}</p>
<div className={styles.links}>
<Link to={`cast`} state={{from: backRef.current}}
className={styles.tab}>Cast</Link>
<Link to={`reviews`} state={{from: backRef.current}}
className={styles.tab}>Reviews</Link>
</div>
</div>
</div>
<Routes>
<Route path="cast" element={<MovieCast/>} />
<Route path="reviews" element={<MovieReviews/>} />
</Routes>
</section>
);
}