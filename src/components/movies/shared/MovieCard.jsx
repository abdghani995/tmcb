import React from 'react';
import { useHistory } from "react-router-dom";


const MovieCard = ({movie}) => {
    const history = useHistory();

    const getImage = () => {
        if(movie.poster_path != null){
            return `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
        }else{
            return `http://via.placeholder.com/150x350&text=${movie.original_title}`;
        }
    }
    // let movie_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    
    const viewMovieDetails = () => {
        history.push(`/movie/${movie.id}`);
    }
    
    return (
        <div className="card db-0">
            <img className="img-fluid" src={getImage()} />
            <div className="card-body bd bd-t-0 ">
                <div className="text-center">
                    <b>{movie.original_title}</b>
                </div>

                <div className="mg-t-10">
                    <span className="ed-badge ed-primary-outline">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <span className="mg-l-5 mg-r-5">{movie.release_date}</span>
                    </span>
                    <span className="ed-badge ed-primary-outline">
                        <ion-icon name="star-outline"></ion-icon>
                        <span className="mg-l-5 mg-r-5">{movie.vote_average}</span>
                    </span>
                    <span className="ed-badge ed-primary-outline">
                        <ion-icon name="person-outline"></ion-icon>
                        <span className="mg-l-5 mg-r-5">{movie.vote_count}</span>
                    </span>
                </div>

                <div className="btn btn-primary mg-t-10 btn-block" onClick={viewMovieDetails}> View </div><div>
                </div>

            </div>
        </div>
    )

} 

export default MovieCard;