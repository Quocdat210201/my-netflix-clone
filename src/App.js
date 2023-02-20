import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer"
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Pages/Search";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
