import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
export default function NotFoundPage(){
return (
<div className={styles.center}>
<h1 className="neon">404 — Not Found</h1>
<p className="card">The page you requested was not found.</p>
<Link to="/" className="card">Go home</Link>
</div>
);
}