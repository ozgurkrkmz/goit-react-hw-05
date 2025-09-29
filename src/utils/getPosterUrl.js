const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
export default function getPosterUrl(path) {
return path ? `${IMG_BASE}${path}` : '/placeholder.jpg';
}