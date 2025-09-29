import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import tmdb from '../../api/tmdb';
import styles from './MovieReviews.module.css';


export default function MovieReviews(){
const { movieId } = useParams();
const [reviews, setReviews] = useState([]);
const [loading, setLoading] = useState(false);


useEffect(()=>{
setLoading(true);
tmdb.get(`/movie/${movieId}/reviews`).then(r=>{
setReviews(r.data.results || []);
}).catch(console.error).finally(()=>setLoading(false));
},[movieId]);


if(loading) return <p className="card">Loading reviews...</p>;
if(!reviews.length) return <p className="card">No reviews available.</p>;


return (
<ul className={styles.list}>
{reviews.map(rv=> (
<li key={rv.id} className={styles.item}>
<div className={styles.author}>{rv.author}</div>
<div className={styles.content}>{rv.content}</div>
</li>
))}
</ul>
);
}