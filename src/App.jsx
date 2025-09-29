import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


export default function App(){
return (
<div>
<Navigation />
<main className="container">
<Suspense fallback={<div className="card">Loading...</div>}>
<Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/movies" element={<MoviesPage/>} />
<Route path="/movies/:movieId/*" element={<MovieDetailsPage/>} />
<Route path="/404" element={<NotFoundPage/>} />
<Route path="*" element={<Navigate to="/" replace/>} />
</Routes>
</Suspense>
</main>
</div>
);
}