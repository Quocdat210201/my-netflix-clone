import Content from "./components/Content/Content";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import MoviesDetail from "./components/MovieDetail/movieDetail";
import Footer from "./components/Footer/footer"
import { useSelector } from "react-redux";

function App() {
  const  {MovieDetail}  = useSelector(state => state.infoMovie)

  return (
    <div className="app">
      <Navbar />
      <Intro />
      <Content />
      <Footer />
      <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false} />
    </div>
  );
}

export default App;
