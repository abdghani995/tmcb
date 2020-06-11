import React, {useState, useEffect} from 'react';
import MovieCard from './shared/MovieCard';
import Loader from '../shared/Loader';

import {fetch_popular} from '../../api/movies';

class Popular extends React.Component {

    state = {
        movies: [],
        page: 1
    }
    
    async componentDidMount(){
        const fetchedPopular  = await fetch_popular(this.state.page);
        this.setState({movies: fetchedPopular});
    }

    render(){
        return (
            <div>
                <h4 className="mg-t-10">Popular Movies</h4>
                <div className="section-wrapper mg-t-10">
                    <div className="row">
                        {   
                            this.state.movies.length ? 
                            this.state.movies.map((movie, index) => (
                                <div className="col-md-3 mg-t-10">
                                    <MovieCard movie={movie} key={index}/>
                                </div>
                            )) : <Loader />
                        }
                    </div>
                </div>

                <div className="pagination-wrapper">
                    <nav aria-label="Page navigation">
                        <ul className="pagination mg-b-0">
                            <li className={`page-item` }>
                                <a className="page-link" href="#">1</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        )
    }
}

export default Popular;
