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