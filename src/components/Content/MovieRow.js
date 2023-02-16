import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../../utils";

// const movies = [
//   {
//     url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-1.png",
//     name: "Godzilla vs Kong",
//   },
//   {
//     url: "https://genk.mediacdn.vn/139269124445442048/2020/3/1/johnwick-15830469714681182777464.jpg",
//     name: "John Wick 2",
//   },
//   {
//     url: "https://znews-photo.zingcdn.me/w660/Uploaded/xbhunku/2019_03_15/D1nkY7UVAAUs7KN.jpg",
//     name: "End Game",
//   },
//   {
//     url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-2.png",
//     name: "Black Widow",
//   },
//   {
//     url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-3.png",
//     name: "Fast and Furious 9",
//   },
//   {
//     url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-4.png",
//     name: "The Kingsman: Khởi nguồn",
//   },
//   {
//     url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-6.png",
//     name: "The Suicide Squad 2",
//   },
//   {
//     url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-7.png",
//     name: "Jurassic World: Dominion",
//   },
//   {
//     url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-10.png",
//     name: "Cruella ",
//   },
//   {
//     url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-5.png",
//     name: "The Devil Made Me Do It",
//   },
// ];

function MovieRow(props) {
  const { movies, title, isNetflix } = props;
  const sliderRef = useRef();
  const movieRef = useRef();
  // const [dragDown, setDragDown] = useState(0);
  // const [dragMove, setDragMove] = useState(0);
  // const [isDrag, setIsDrag] = useState(false);

  // handle click button left - right
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (maxScrollLeft > sliderRef.current.scrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        400,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        400,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  // Drag the slider
  // useEffect(() => {
  //   if (isDrag) {
  //     if (dragMove < dragDown) handleScrollRight();
  //     if (dragMove > dragDown) handleScrollLeft();
  //   }
  // }, [dragDown, dragMove, isDrag]);

  // const onDragStart = (e) => {
  //   setIsDrag(true);
  //   setDragDown(e.screenX);
  // };

  // const onDragEnd = (e) => {
  //   setIsDrag(false);
  // };

  // const onDragEnter = (e) => {
  //   setDragMove(e.screenX);
  // };

  return (
    <MovieContainer
      // draggable="false"
      className="bg-[var(--primary-color)] text-[var(--white-color)] px-[22px] pb-0 w-full h-full pt-4"
    >
      <h1 className="h1">{title}</h1>
      <MovieSlider
        ref={sliderRef}
        // draggable="true"
        // onDragStart={onDragStart}
        // onDragEnd={onDragEnd}
        // onDragEnter={onDragEnter}
        className="grid gap-2 select-none px-3.5 pb-10 pt-3 scroll-smooth"
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length}, ${
                  isNetflix ? "250px" : "230px"
                })`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.backdrop_path && movie.poster_bath !== null) {
              let imageUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  ref={movieRef}
                  key={index}
                  className="relative w-full h-full movie-item scale-100 transition select-none overflow-hidden rounded-md"
                >
                  <img
                    src={imageUrl}
                    alt="thumbnails"
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                  {isNetflix ? null : (
                    <div className="absolute left-0 right-0 bottom-0 text-center text-[12px] bg-[rgba(0,0,0,0.5)] text-[var(--white-color)] vertical">
                      {movie.name || movie.title}
                    </div>
                  )}
                </div>
              );
            }
          })}
      </MovieSlider>
      <div className="btnSlider left-10" onClick={handleScrollLeft}>
        <FiChevronLeft className="w-full h-full scale-95 hover:scale-105 transition" />
      </div>
      <div className="btnSlider right-10" onClick={handleScrollRight}>
        <FiChevronRight className="w-full h-full scale-95 hover:scale-105 transition" />
      </div>
    </MovieContainer>
  );
}

export default MovieRow;

const MovieContainer = styled.div`
  position: relative;

  .btnSlider {
    position: absolute;
    top: 40%;
    z-index: 7;
    transform-origin: center;
    cursor: pointer;
    // background-color: red;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    height: 50px;
    width: 30px;
    transition: all 0.2s linear;

    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
      color: var(--white-color);
    }
  }
`;

const MovieSlider = styled.div`
    transition: all .3s linear;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;

    &:hover .movie-item{
        opacity: 0.5;
    }
  }
  .movie-item {
    max-width: 250px;
    max-height: 380px;
    transform: center left;

    &:hover {
      opacity: 1;
      transform: scale(1.07);
      z-index: 6;
      cursor: pointer; 
    }
  }
  .vertical{
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;
