import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useViewport } from "../hooks";
import { getSearchMovies, setMovieDetail } from "../store/action"

// const movies = [
//     {
//         url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-1.png",
//         name: "Godzilla vs Kong",
//     },
//     {
//         url: "https://genk.mediacdn.vn/139269124445442048/2020/3/1/johnwick-15830469714681182777464.jpg",
//         name: "John Wick 2",
//     },
//     {
//         url: "https://znews-photo.zingcdn.me/w660/Uploaded/xbhunku/2019_03_15/D1nkY7UVAAUs7KN.jpg",
//         name: "End Game",
//     },
//     {
//         url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-2.png",
//         name: "Black Widow",
//     },
//     {
//         url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-3.png",
//         name: "Fast and Furious 9",
//     },
//     {
//         url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-4.png",
//         name: "The Kingsman: Khởi nguồn",
//     },
//     {
//         url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-6.png",
//         name: "The Suicide Squad 2",
//     },
//     {
//         url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-7.png",
//         name: "Jurassic World: Dominion",
//     },
//     {
//         url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-10.png",
//         name: "Cruella ",
//     },
//     {
//         url: "https://mcdn.coolmate.me/image/August2021/phim-an-khach-5.png",
//         name: "The Devil Made Me Do It",
//     },
// ];

const useQuery = () => new URLSearchParams(useLocation().search)

function SearchMovies(props) {
    const [windowWidth] = useViewport()
    const dispatch = useDispatch();
    const { SearchMovie } = useSelector((state) => state.infoMovie);
    const keywords = useQuery().get('keywords')

    useEffect(() => {
        if (keywords) dispatch(getSearchMovies(keywords));
    }, [keywords, dispatch]);


    return (
        <div className="w-full min-h-screen pt-20 bg-[var(--primary-color)] transition-all">
            {
                SearchMovie && SearchMovie.length > 0 ? (
                    <div
                        className="px-[60px] py-[40px] grid gap-2"
                        style={{
                            gridTemplateColumns: `repeat(${windowWidth > 1200 ? 5 :
                                windowWidth > 922 ? 4 :
                                    windowWidth > 768 ? 3 :
                                        windowWidth > 600 ? 2 : 1
                                }, auto`,
                        }}
                    >
                        {
                            SearchMovie.map((movie, index) => {
                                if (movie.backdrop_path !== null & movie.media_type !== 'person') {
                                    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                    return (
                                        <div
                                            key={index} 
                                            className="relative w-[266px] h-[150px] movie-item scale-100 transition select-none overflow-hidden rounded-md mb-3"
                                            onClick={() => dispatch(setMovieDetail(movie))}
                                        >
                                            <img

                                                src={imageUrl}
                                                // src='https://image.tmdb.org/t/p/original//kTs2WNZOukpWdNhoRlH94pSJ3xf.jpg'
                                                // src={movie.url}
                                                alt="thumbnails"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute left-0 right-0 bottom-0 text-center text-[12px] bg-[rgba(0,0,0,0.5)] text-[var(--white-color)] vertical">
                                                <span className="block max-w-[200px] mx-auto">
                                                    {movie.name || movie.title}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                ) : (
                    <div className="px-[60px] py-[40px]">
                        <h1 className="text-[var(--white-color)] text-[1.6rem] font-medium">
                        You serach for <span className="text-[#e50914]">{keywords}</span> did not find</h1>
                    </div>
                )
            }
        </div>
    );
}

export default SearchMovies;