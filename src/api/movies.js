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

export const search_movie = async (page, query) => {
    let url = `${base_url}/search/movie?api_key=${api_key}&language=en-US&page=${page}&include_adult=false&query=${query}`;;
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

export const fetch_cast_details = async (movie_id) => {
    let url = `${base_url}/movie/${movie_id}/credits?api_key=${api_key}`;
    let { data } = await axios.get(url);
    return data['cast'];
}

export const fetch_reviews = async (movie_id, page) => {
    let url = `${base_url}/movie/${movie_id}/reviews?api_key=${api_key}&language=en-US&page=${page}`;
    let { data } = await axios.get(url);
    return data['results'];
}

export const fetch_similar_movies = async (movie_id, page) => {
    let url = `${base_url}/movie/${movie_id}/similar?api_key=${api_key}&language=en-US&page=${page}`;
    let { data } = await axios.get(url);
    return data['results'];
}