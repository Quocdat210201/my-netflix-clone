import { useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import MovieRow from "./MovieRow";
import * as Action from "../store/action";
import { animateScroll as scroll } from 'react-scroll'
import {UseScrollY} from '../hooks'

const OnScrollTop = () => {
  scroll.scrollToTop()
}

function Content() {
  const age =8;

  const [scroll] = UseScrollY()
  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    TrendingMovies,
    TVShows,
    TopRateMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
  } = useSelector((state) => state.infoMovie);

  useEffect(() => {
    dispatch(Action.getNetflixOriginals());
    dispatch(Action.getTrendingMovies());
    dispatch(Action.getTVShow());
    dispatch(Action.getTopRateMovies());
    dispatch(Action.getActionMovies());
    dispatch(Action.getComedyMovies());
    dispatch(Action.getHorrorMovies());
    dispatch(Action.getRomanceMovies());
  }, [dispatch]);
  // console.log(NetflixOriginals);

  return (
    <div>
      <MovieRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
      />
      <MovieRow
        movies={TrendingMovies}
        title="Trending Now"
        isNetflix={false}
      />
      <MovieRow movies={TVShows} title="TV Show" isNetflix={false} />
      <MovieRow movies={TopRateMovies} title="Top Rate" isNetflix={false} />
      <MovieRow movies={ActionMovies} title="Action movies" isNetflix={false} />
      <MovieRow movies={ComedyMovies} title="Comedy movies" isNetflix={false} />
      <MovieRow movies={HorrorMovies} title="Horror movies" isNetflix={false} />
      <MovieRow
        movies={RomanceMovies}
        title="Romance movies"
        isNetflix={false}
      />
      <div
        className="fixed bg-[var(--btn-color)] text-[46px] text-[var(--white-color)] w-16 h-16 rounded-full bottom-16 right-16 z-50 flex items-center justify-center transition cursor-pointer"
        onClick={OnScrollTop}
        style={{
          visibility: `${scroll > 400 ? 'visible' : 'hidden'}`
        }}
      >
        <FaAngleUp />
      </div>
    </div>
  );
}

export default Content;
