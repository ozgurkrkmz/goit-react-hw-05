import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';


export default function Navigation(){
return (
<header className={styles.header}>
<nav className={styles.nav}>
<NavLink to="/" className={({isActive})=> isActive? styles.active : ''} end>Home</NavLink>
<NavLink to="/movies" className={({isActive})=> isActive? styles.active : ''}>Movies</NavLink>
</nav>
</header>
);
}