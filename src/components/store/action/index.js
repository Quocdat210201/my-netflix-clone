import axios from "axios";
import * as Types from '../types'

const API_KEY = 'cb6715ee6168cbe06e406f5ea1b50fa5'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getNetflixOriginals = () => async dispath => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispath({type : Types.GET_NETFLIX_ORIGINALS, payload : result.data.results})
    } catch (error) {
        console.log('Get netflix API error');
    }
}

export const getTrendingMovies = () => async dispath => {
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-us`
        );
        dispath({type : Types.GET_TRENDING_MOVIES, payload : result.data.results})
    } catch (error) {
        console.log('Get treding API error');
    }
}

export const getTVShow = () => async dispath => {
    try {
        const result = await axios.get(
            `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-us`
        );
        dispath({type : Types.GET_TV_SHOW, payload : result.data.results})
    } catch (error) {
        console.log('Get TV shows API error');
    }
}

export const getTopRateMovies = () => async dispath => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
        );
        dispath({type : Types.GET_TOPRATE_MOVIES, payload : result.data.results})
    } catch (error) {
        console.log('Get toprate API error');
    }
}

export const getActionMovies = () => async dispath => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispath({type : Types.GET_ACTIONS_MOVIES, payload : result.data.results})
    } catch (error) {
        console.log('Get action API error');
    }
}

export const getComedyMovies = () => async dispath => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispath({type : Types.GET_COMEDY_MOVIES, payload : result.data.results})
    } catch (error) {
        console.log('Get comedy API error');
    }
}

export const getHorrorMovies = () => async dispath => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispath({type : Types.GET_HORROR_MOVIES, payload : result.data.results})
    } catch (error) {
        console.log('Get horror API error');
    }
}


export const getRomanceMovies = () => async dispath => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispath({type : Types.GET_ROMANCE_MOVIES, payload : result.data.results})
    } catch (error) {
        console.log('Get romance API error');
    }
}
