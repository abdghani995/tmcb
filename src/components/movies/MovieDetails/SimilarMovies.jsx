
import React from 'react';
import ShowMore from '../../shared/ShowMore';
import MovieCard from '../shared/MovieCard';

const SimilarMovies = ({movies}) => {
    return (
        <div className="row">
            {
                movies.map((movie, idx) => ( 
                    <div className="col-md-4 mg-t-10" key={idx}>
                        <MovieCard movie={movie} /> 
                    </div>
                ))
            }
        </div> 
    )

}


export default SimilarMovies;