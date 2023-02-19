import { IoIosClose } from 'react-icons/io'
import { FaPlay } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai"
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/action';
import Moment from 'react-moment';

function MoviesDetail(props) {
    const [visible, setVisible] = useState(true)
    const dispatch = useDispatch();
    const { movie, showModal } = props

    const handleCloseMovie = () => {
        dispatch(setMovieDetail(null))
    }

    // const showModal = false

    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.65)] items-center justify-center transition-opacity ${showModal ? 'flex' : 'hidden'}`}>
            <div className="bg-[#181818] w-900px] h-[680px] rounded-md relative transition-scale">
                <div className="absolute right-3 top-3 w-9 h-9 flex items-center justify-center z-20 bg-[#181818] cursor-pointer rounded-full text-[2.4rem] text-[var(--white-color)]"
                    onClick={() => handleCloseMovie()}>
                    <IoIosClose />
                </div>
                <div className="absolute top-[60%] w-full h-[70px] bg-linear"></div>
                <div className="rounded-t-mdr w-[848px] h-[477px]">
                    <img
                        src={movie ?
                            (`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                                || `https://image.tmdb.org/t/p/original/${movie.poster_path}`) : 'Error'} alt="Thumbnails"
                        className='rounded-t-md object-cover w-full h-full' />
                </div>
                <div className="absolute top-[360px] left-[60px] text-[var(--white-color)]">
                    <div className="flex items-center">
                        <button className="flex bg-[#fff] text-[#000] btn hover:bg-[#e6e6e6]">
                            <FaPlay className="w-7 h-7 mr-4" />
                            Play
                        </button>
                        <Tippy content="Add to My List" placement="top" theme="light">
                            <div className="w-10 h-10 bg-[rgba(42,42,42,0.6)] border-2 border-[hsla(0,0%,100%,0.5)] text-[#fff] text-[2rem] flex items-center justify-center rounded-full cursor-pointer hover:border-[#fff] transition mr-2.5">
                                <BsPlus />
                            </div>
                        </Tippy>
                        <Tippy content="Like" placement="top" theme="light">
                            <div className="w-10 h-10 bg-[rgba(42,42,42,0.6)] border-2 border-[hsla(0,0%,100%,0.5)] text-[#fff] text-[1.4rem] flex items-center justify-center rounded-full cursor-pointer hover:border-[#fff] transition mr-2.5"
                                onClick={() => setVisible(prev => !prev)}
                            >
                                {
                                    visible ? <AiOutlineLike /> : <AiTwotoneLike />
                                }
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className='text-[2rem] font-semibold font-serif text-[#fff] px-14 pb-1.5' >
                    <h1 className=''>{movie ? (movie.name || movie.title) : ''}</h1>
                </div>
                <div className="text-[#fff] flex justify-between absolute pb-2 px-14">
                    <div className="w-full max-w-[28rem]" >
                        <div className="mb-2.5">
                            <span className="mr-1 text-[#46d369] text-[16px] font-semibold">96% Match </span>
                            <span className="mr-1"> 2020 </span>
                            <span className="mr-1 maturity"> 16+ </span>
                            <span className="mr-1"> 5 Episodes </span>
                        </div>
                        <p className="text-[14px] vertical-4">{movie ? movie.overview : 'Error'}</p>
                    </div>
                    <div className="pl-12 text-[14px]">
                        <div className="flex items-center leading-7">
                            <h1 className="mr-2 text-[#777]">Rating:</h1>
                            <span className="italic">{movie ? movie.vote_average * 10 : 'Error'}%</span>
                        </div>
                        <div className="flex items-center leading-7">
                            <h1 className="mr-2 text-[#777]">Popularity: </h1>
                            <span className="italic">{movie ? movie.popularity : 'Error'}</span>
                        </div>
                        <div className="flex items-center leading-7">
                            <h1 className="mr-2 text-[#777]">Release date: </h1>
                            <Moment className="italic" format='DD-MM-YYYY'>{movie ? (movie.release_date || movie.first_release_date) : 'Error'}</Moment>
                        </div>
                        <div className="flex items-center leading-7">
                            <h1 className="mr-2 text-[#777]">Runtime: </h1>
                            <span className="italic">{movie ? movie.runtime : "Error"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default MoviesDetail;



