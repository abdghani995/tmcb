import axios from 'axios';

let base_url = 'https://api.themoviedb.org/3';
let api_key = '5516d8bdaf474c070e259638e87aa25d';

export const fetch_popular = async (page) => {
    let url = `${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=${page}`;
    let response = await axios.get(url);
    
    return response.data.results.map(({id, original_title, release_date, backdrop_path, poster_path, vote_average, vote_count}) => (
        {id, original_title, release_date, backdrop_path, poster_path, vote_average, vote_count}
    ))
}

export const fetch_movie_details = async (movie_id) => {
    let url = `${base_url}/movie/${movie_id}?api_key=${api_key}&language=en-US`;
    let { data } = await axios.get(url);
    return data;
}