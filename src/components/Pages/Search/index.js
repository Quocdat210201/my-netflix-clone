import React from 'react'
import SearchMovies from '../../SearchMovie/SearchMovie';
import MoviesDetail from "../../MovieDetail/movieDetail"
import { useSelector } from 'react-redux';

function Search(props) {
    const {MovieDetail} = useSelector(state => state.infoMovie)
    return <div>
        <SearchMovies/>
        <MoviesDetail showModal={MovieDetail ? true : false}  movie={MovieDetail}/>
    </div>;
}

export default Search;