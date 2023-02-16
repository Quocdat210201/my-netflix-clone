import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieRow from "./MovieRow";
import { getNetflixOriginals } from "../store/action";

const movies = [
  // {
  //   url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-1.png",
  //   name: "Godzilla vs Kong",
  // },
  // {
  //   url: "https://genk.mediacdn.vn/139269124445442048/2020/3/1/johnwick-15830469714681182777464.jpg",
  //   name: "John Wick 2",
  // },
  // {
  //   url: "https://znews-photo.zingcdn.me/w660/Uploaded/xbhunku/2019_03_15/D1nkY7UVAAUs7KN.jpg",
  //   name: "End Game",
  // },
  // {
  //   url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-2.png",
  //   name: "Black Widow",
  // },
  // {
  //   url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-3.png",
  //   name: "Fast and Furious 9",
  // },
  // {
  //   url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-4.png",
  //   name: "The Kingsman: Khởi nguồn",
  // },
  // {
  //   url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-6.png",
  //   name: "The Suicide Squad 2",
  // },
  // {
  //   url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-7.png",
  //   name: "Jurassic World: Dominion",
  // },
  // {
  //   url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-10.png",
  //   name: "Cruella ",
  // },
  // {
  //   url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-5.png",
  //   name: "The Devil Made Me Do It",
  // },
];

function Content() {
  const dispatch = useDispatch();
  const { NetflixOriginals } = useSelector((state) => state.infoMovie);

  useEffect(() => {
    dispatch(getNetflixOriginals());
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
        movies={NetflixOriginals}
        title="Trending movies"
        isNetflix={false}
      />
      <MovieRow
        movies={NetflixOriginals}
        title="Trending TV Show"
        isNetflix={false}
      />
      <MovieRow
        movies={NetflixOriginals}
        title="Action movies"
        isNetflix={false}
      />
      <MovieRow
        movies={NetflixOriginals}
        title="Adventure movies"
        isNetflix={false}
      />
    </div>
  );
}

export default Content;
