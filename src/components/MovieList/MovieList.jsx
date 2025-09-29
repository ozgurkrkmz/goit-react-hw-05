import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';
import getPosterUrl from '../../utils/getPosterUrl';


export default function MovieList({movies=[]}){
const location = useLocation();
return (
<ul className={styles.grid}>
{movies.map(m => (
<li key={m.id} className={styles.card}>
<Link to={`/movies/${m.id}`} state={{from: location}} className={styles.link}>
<div className={styles.thumb}>
<img src={getPosterUrl(m.poster_path)} alt={m.title} />
</div>
<div className={styles.info}>
<h3 className={styles.title}>{m.title}</h3>
<p className={styles.year}>{(m.release_date||'').slice(0,4)}</p>
</div>
</Link>
</li>
))}
</ul>
);
}