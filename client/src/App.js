import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer"
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routerConfig from './config'
import Search from "./Pages/Search";
import Movies from "./Pages/Movies";
import TVShow from "./Pages/TVShow";
import Latest from "./Pages/Latest";
import MyList from "./Pages/MyList";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={routerConfig.home} element={<Home />} />
          <Route path={routerConfig.search} element={<Search />} />
          <Route path={routerConfig.movies} element={<Movies />}/>
          <Route path={routerConfig.tvShow} element={<TVShow />}/>
          <Route path={routerConfig.latest} element={<Latest />}/>
          <Route path={routerConfig.myList} element={<MyList />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
