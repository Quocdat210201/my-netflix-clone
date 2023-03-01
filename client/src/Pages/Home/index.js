import { useSelector } from "react-redux";
import Intro from "../../components/Intro/Intro";
import Content from "../../components/Content/Content";
import MoviesDetail from "../../components/MovieDetail/movieDetail"
import { useEffect, useState } from "react";

function Home(props) {
    const { MovieDetail } = useSelector(state => state.infoMovie)
    const [inShowMovieDetail, setIsShowMovieDetail] = useState(false);

    useEffect(()=> {
        setIsShowMovieDetail(MovieDetail ? true : false);
    },[MovieDetail])
    return <div>
        <Intro />
        <Content />
        <MoviesDetail movie={MovieDetail} showModal={inShowMovieDetail} />
    </div>;
}

export default Home;