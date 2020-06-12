import React from 'react'
import { withRouter } from "react-router-dom";
import CastCard  from './CastCard';
import Reviews from './Reviews'
import SimilarMovies from './SimilarMovies';

import { fetch_movie_details, fetch_cast_details, 
        fetch_reviews, fetch_similar_movies } from '../../../api/movies';
import Loader from '../../shared/Loader';

class MovieDetails extends React.Component  {

    state = {
        'movie_id': '',
        'movie': {},
        'cast': [],
        'reviews': [],
        'similar': [],
        'reviewPage': 1,
        'similarPage': 1,
        'menu_name': 'cast'
    }

    componentDidMount() {
        if (this.props.match.params.movie_id != undefined) {
            let mid = this.props.match.params.movie_id;
            this.init_movie(mid);
        }
    }

    init_movie(mid){
        this.setState({ 'movie_id': mid });
        this.fetch_movie(mid);
        this.fetch_cast(mid);
        this.fetch_reviews(mid);
        this.fetch_similar(mid);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.movie_id !== this.props.match.params.movie_id){
            let mid = this.props.match.params.movie_id;
            this.init_movie(mid);
            window.scrollTo(0, 0);
            this.setState({menu_name:'cast'})
        }
      }

    fetch_movie = async (mid) => {
        const fetchedMovie  = await fetch_movie_details(mid);
        console.log(fetchedMovie);
        
        this.setState({'movie': fetchedMovie});
    }

    fetch_cast = async (mid) => {
        const fetchedCast  = await fetch_cast_details(mid);
        this.setState({'cast': fetchedCast});
    }

    fetch_reviews = async (mid) => {
        const fetchedReviews  = await fetch_reviews(mid, this.state.reviewPage);
        this.setState({'reviews': fetchedReviews});
    }

    fetch_similar = async (mid) => {
        const fetchedSimilar  = await fetch_similar_movies(mid, this.state.similarPage);
        this.setState({'similar': fetchedSimilar});
    }
    
    get_prodcomp_image(url){
        if (url != null){
            return `https://image.tmdb.org/t/p/w500${url}`;
        }else{
            return 'http://via.placeholder.com/500x500';
        }
    }

    setMenu(menuname){
        this.setState({'menu_name': menuname});
    }

    render (){
        let movie = this.state.movie;
        let casts = this.state.cast;
        let reviews = this.state.reviews;
        let similar = this.state.similar;

        let movie_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
        
        return (
            movie.original_title ?
            <div>
                <h4 className="mg-t-10">Movie Details</h4>

                <div className="row row-sm">
                    <div className="col-lg-8">
                    <img src={movie_path} alt="" width="100%" />
                        <div className="card card-profile">
                            <div className="card-body">
                                <div className="media">
                                    <div className="media-body">
                                        <h3 className="card-profile-name">
                                            {movie.original_title}
                                            {movie.original_title != movie.title ? ' ('+movie.title+')':''}
                                        </h3>
                                        <div className="media-body pull-right">
                                            <h1>{movie.vote_average}</h1>
                                            <p>Ratings</p>
                                        </div>
                                        <div>
                                            <ion-icon name="calendar-outline"></ion-icon>
                                            <span className="mg-l-5">{movie.release_date}</span>
                                        </div>

                                        <p className="card-profile-position">{movie.tagline}</p>
                                            {
                                                movie.genres.map((genre,idx) => (
                                                    <span key={idx} className="ed-badge ed-primary-outline">{genre.name}</span>
                                                ))
                                            }
                                        <p className="mg-b-0 mg-t-20">{movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <a href={movie.homepage} target="blank" className="card-profile-direct">{movie.homepage}</a>
                                <div>
                                    <a href="">Popularity Score &nbsp;&nbsp;&nbsp; {movie.popularity}</a>
                                </div>
                            </div>
                        </div>

                        <ul className="nav nav-activity-profile mg-t-20">
                            <li className="nav-item">
                                <a href="javascript:;" className={"nav-link "+(this.state.menu_name == 'cast'? 'myactive':'')} onClick={() => this.setMenu('cast')}>
                                    <i className="icon ion-ios-redo tx-purple"></i> Cast
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript:;" className={"nav-link "+(this.state.menu_name == 'review'? 'myactive':'')} onClick={() => this.setMenu('review')}>
                                    <i className="icon ion-image tx-primary"></i> Reviews
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript:;" className={"nav-link "+(this.state.menu_name == 'similar'? 'myactive':'')} onClick={() => this.setMenu('similar')}>
                                    <i className="icon ion-document-text tx-success"></i> Similar Movies
                                </a>
                            </li>
                        </ul>

                        <div className="card card-latest-activity mg-t-20">
                            {
                                this.state.menu_name == 'cast' ?(
                                    <div className="card-body">
                                        <div className="slim-card-title">Cast</div>
                                        <CastCard casts={casts} />
                                    </div>
                                ):''
                            }
                            {
                                this.state.menu_name == 'review' ?(
                                    <div className="card-body">
                                        <div className="slim-card-title">Reviews</div>
                                        <Reviews reviews={reviews} />
                                    </div>
                                ):''
                            }
                            {
                                this.state.menu_name == 'similar' ?(
                                    <div className="card-body">
                                        <div className="slim-card-title">Similar Movies</div>
                                        <SimilarMovies movies={similar} />
                                    </div>
                                ):''
                            }
                            
                        </div>
                    </div>

                    <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                        <div className="card card-connection">
                            <div className="row row-xs">
                                <div className="col-5 tx-primary">{movie.runtime}m</div>
                                <div className="col-7">
                                    <h2 className="mg-t-10">
                                        Runtime
                                    </h2>
                                </div>
                            </div>
                            <hr />
                            <div className="row row-xs">
                                <div className="col-5 tx-purple">{movie.vote_count}</div>
                                <div className="col-7">
                                    <h2 className="mg-t-10">
                                        Votes
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card card-people-list mg-t-20">
                            <div className="slim-card-title">Production Companies</div>
                            <div className="media-list">
                                {
                                    movie.production_companies.map((comp, idx) => (

                                        <div className="media" key={idx}>
                                            <img src={this.get_prodcomp_image(comp.logo_path)} alt="" />
                                            <div className="media-body">
                                                <a href="#">{comp.name}</a>
                                                <p>Country :- {comp.origin_country}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="card card-people-list mg-t-20">
                            <div className="slim-card-title">Production Countries</div>
                            <div className="media-list">
                                {
                                    movie.production_countries.map((prod, idx) => (

                                        <div className="media" key={idx}>
                                            <div className="media-body">
                                                <a href="#">{prod.name}</a>
                                                <p>Code :- {prod.iso_3166_1}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="card card-status mg-t-20">
                            <div className="media">
                                <i className="icon ion-ios-bookmarks-outline tx-teal"></i>
                                <div className="media-body">
                                <h1>$ &nbsp;{movie.budget}</h1>
                                <p className="mg-t-10">Total Budget</p>
                                </div>
                            </div>
                        </div>

                        <div className="card card-status mg-t-20">
                            <div className="media">
                                <i className="icon ion-ios-bookmarks-outline tx-teal"></i>
                                <div className="media-body">
                                <h1>$ &nbsp;{movie.revenue}</h1>
                                <p className="mg-t-10">Total Revenue</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
            </div> : <Loader />
        )
    }
}

export default withRouter(MovieDetails);