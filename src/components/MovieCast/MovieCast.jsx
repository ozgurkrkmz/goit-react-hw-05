import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import tmdb from '../../api/tmdb';
import styles from './MovieCast.module.css';


export default function MovieCast(){
const { movieId } = useParams();
const [cast, setCast] = useState([]);
const [loading, setLoading] = useState(false);


useEffect(()=>{
setLoading(true);
tmdb.get(`/movie/${movieId}/credits`).then(r=>{
setCast(r.data.cast || []);
}).catch(console.error).finally(()=>setLoading(false));
},[movieId]);


if(loading) return <p className="card">Loading cast...</p>;
if(!cast.length) return <p className="card">No cast information available.</p>;


return (
<ul className={styles.list}>
{cast.map(c=> (
<li key={c.cast_id || c.credit_id} className={styles.item}>
<div className={styles.name}>{c.name}</div>
<div className={styles.character}>{c.character}</div>
</li>
))}
</ul>
);
}