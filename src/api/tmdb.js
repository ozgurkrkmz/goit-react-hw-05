import axios from 'axios';


const token = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;


const tmdb = axios.create({
baseURL: 'https://api.themoviedb.org/3',
headers: {
Authorization: `Bearer ${token}`,
'Content-Type': 'application/json;charset=utf-8',
},
});


export default tmdb;