import React, {useState, useEffect} from 'react';
import MovieCard from './shared/MovieCard';
import Loader from '../shared/Loader';

import {fetch_popular, search_movie} from '../../api/movies';

class Popular extends React.Component {

    state = {
        movies: [],
        page: 1,
        search: '',
        searchlock: false
    }
    
    async componentDidMount(){
        const fetchedPopular  = await fetch_popular(this.state.page);
        this.setState({movies: fetchedPopular});
    }

    handleChange = async(e) => {
        console.log(e.target.value);
        
        if (e.target.value.length > 0){
            this.setState({search: e.target.value});
            this.search_movie(e.target.value);
        }else{
            const fetchedPopular  = await fetch_popular(this.state.page);
            this.setState({movies: fetchedPopular});
        }
    }

    search_movie = async (query) => {
        const fetchedSearched  = await search_movie(this.state.page, query);
        this.setState({movies: fetchedSearched});
    }
    

    render(){
        return (
            <div>
                <h4 className="mg-t-10">Popular Movies</h4>

                <div className="section-wrapper mg-t-10-mg-b-10">
                    <div class="row">
                        <div class="col-lg">
                            <input class="form-control" placeholder="Search Movie" type="text" onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </div>
                </div>

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

                {/* <div className="pagination-wrapper">
                    <nav aria-label="Page navigation">
                        <ul className="pagination mg-b-0">
                            <li className={`page-item` }>
                                <a className="page-link" href="#">1</a>
                            </li>
                        </ul>
                    </nav>
                </div> */}

            </div>
        )
    }
}

export default Popular;
