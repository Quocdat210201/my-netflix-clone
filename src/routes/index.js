// Routes config
import routesConfig from '../config';

// Pages
import Home from '../Pages/Home';
import Latest from '../Pages/Latest';
import Movies from '../Pages/Movies';
import MyList from '../Pages/MyList';
import TVShow from '../Pages/TVShow';
import Search from '../Pages/Search';

// Public Routes
const publciRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.tvShow, component: TVShow },
    { path: routesConfig.movies, component: Movies },
    { path: routesConfig.latest, component: Latest },
    { path: routesConfig.myList, component: MyList },
    { path: routesConfig.search, component: Search },
];

// Pivate Routes
const privateRoutes = [];

export { publciRoutes, privateRoutes };