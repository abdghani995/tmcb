import React from 'react'
import { withRouter } from "react-router-dom";

import {fetch_movie_details} from '../../api/movies';
import Loader from '../shared/Loader';

class MovieDetails extends React.Component  {

    state = {
        'movie_id': '',
        'movie': {}
    }

    componentDidMount() {
        if (this.props.match.params.movie_id != undefined) {
            let mid = this.props.match.params.movie_id;
            this.setState({ 'movie_id': mid });
            this.fetch_movie(mid);
        }
    }

    fetch_movie = async (mid) => {
        const fetchedMovie  = await fetch_movie_details(mid);
        this.setState({'movie': fetchedMovie});
    }
    
    get_prodcomp_image(url){
        if (url != null){
            return `https://image.tmdb.org/t/p/w500${url}`;
        }else{
            return 'http://via.placeholder.com/500x500';
        }
    }

    render (){
        let movie = this.state.movie;
        let movie_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
        console.log(movie);
        
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
                                    {/* <span className="pull-right ed-badge mr-1 rating-pill-success">{movie.vote_average}</span> */}
                                    <p className="card-profile-position">{movie.tagline}</p>
                                        {
                                            movie.genres.map((genre,idx) => (
                                                <span key={idx} className="ed-badge ed-primary-outline">{genre.name}</span>
                                            ))
                                        }
                                    <p className="mg-b-0">{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href={movie.homepage} target="blank" className="card-profile-direct">{movie.homepage}</a>
                            <div>
                                <a href="">
                                Popularity Score &nbsp;&nbsp;&nbsp; {movie.popularity}
                                </a>
                            </div>
                        </div>
                        </div>

                        <ul className="nav nav-activity-profile mg-t-20">
                            <li className="nav-item active"><a href="" className="nav-link"><i className="icon ion-ios-redo tx-purple"></i> Share an update</a></li>
                            <li className="nav-item"><a href="" className="nav-link"><i className="icon ion-image tx-primary"></i> Publish photo</a></li>
                            <li className="nav-item"><a href="" className="nav-link"><i className="icon ion-document-text tx-success"></i> Add an article</a></li>
                        </ul>

                        <div className="card card-latest-activity mg-t-20">
                        <div className="card-body">
                            <div className="slim-card-title">Latest Activity</div>
                            <div className="media media-author">
                            <img src="http://via.placeholder.com/500x500" alt="" />
                            <div className="media-body">
                                <h6><a href="">Katherine</a></h6>
                                <p>Executive Director</p>
                            </div>
                            <span>2 hours ago</span>
                            </div>

                            <p className="activity-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>

                            <div className="row no-gutters">
                            <div className="col-md-4">
                                <a href="">
                                    <img src="http://via.placeholder.com/1024x1280" className="img-fit-cover" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-8">
                                <div className="post-wrapper">
                                <a href="" className="activity-title">Sailing Basics: 10 Nautical &amp; Sailing Terms To Know</a>
                                <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                                <p className="mg-b-0">
                                    <a href="" className="d-block">Charmaine Montuya</a>
                                    <span>Writer &amp; Entrepreneur</span>
                                </p>
                                </div>
                            </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <a href="">Comment</a>
                            <a href="">Likes</a>
                            <a href="">Share</a>
                        </div>
                        </div>

                        <div className="card card-experience mg-t-20">
                        <div className="card-body">
                            <div className="slim-card-title">Work Experience</div>
                            <div className="media">
                            <div className="experience-logo">
                                <i className="icon ion-briefcase"></i>
                            </div>
                            <div className="media-body">
                                <h6 className="position-name">Front-End Engineer / Web Developer</h6>
                                <p className="position-company">Cebu Machine Intelligence, Inc.</p>
                                <p className="position-year">Nov 2012 - Present (5 years +) &nbsp;-&nbsp; <a href="">Edit</a></p>
                            </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="">Show more<span className="d-none d-sm-inline"> experiences (4)</span> <i className="fa fa-angle-down"></i></a>
                            <a href="">Add new</a>
                        </div>
                        </div>

                        <div className="card card-recommendation mg-t-20">
                        <div className="card-body pd-25">
                            <div className="slim-card-title">Recommendations</div>
                            <div className="media align-items-center mg-y-25">
                            <img src="http://via.placeholder.com/500x500" className="wd-40 rounded-circle" alt="" />
                            <div className="media-body mg-l-15">
                                <h6 className="tx-14 mg-b-2"><a href="">Rolando Paloso</a></h6>
                                <p className="mg-b-0">Head Architect</p>
                            </div>
                            <span className="tx-12">Nov 20, 2017</span>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <p className="mg-b-0">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>

                        <div className="card-footer pd-y-12 pd-x-25 bd-t bd-gray-300">
                            <a href="">More recommendations (2) <i className="fa fa-angle-down"></i></a>
                        </div>
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
                                movie.production_companies.map((comp) => (

                                    <div className="media">
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
                        <div className="slim-card-title">People you may know</div>
                        <div className="media-list">
                            <div className="media">
                            <img src="http://via.placeholder.com/500x500" alt="" />
                            <div className="media-body">
                                <a href="">Amber Heard</a>
                                <p>Software Engineer</p>
                            </div>
                            <a href=""><i className="icon ion-person-add tx-20"></i></a>
                            </div>
                            <div className="media">
                            <img src="http://via.placeholder.com/500x500" alt="" />
                            <div className="media-body">
                                <a href="">Richard Salomon</a>
                                <p>Architect</p>
                            </div>
                            <a href=""><i className="icon ion-person-add tx-20"></i></a>
                            </div>
                            <div className="media">
                            <img src="http://via.placeholder.com/500x500" alt="" />
                            <div className="media-body">
                                <a href="">Warren Vito</a>
                                <p>Sales Representative</p>
                            </div>
                            <a href=""><i className="icon ion-person-add tx-20"></i></a>
                            </div>
                            <div className="media">
                            <img src="http://via.placeholder.com/500x500" alt="" />
                            <div className="media-body">
                                <a href="">Charlene Plateros</a>
                                <p>Sales Representative</p>
                            </div>
                            <a href=""><i className="icon ion-person-add tx-20"></i></a>
                            </div>
                            <div className="media">
                            <img src="http://via.placeholder.com/500x500" alt="" />
                            <div className="media-body">
                                <a href="">Allan Palban</a>
                                <p>Sales Representative</p>
                            </div>
                            <a href=""><i className="icon ion-person-add tx-20"></i></a>
                            </div>
                        </div>
                        </div>

                        <div className="card pd-25 mg-t-20">
                        <div className="slim-card-title">Contact &amp; Personal Info</div>

                        <div className="media-list mg-t-25">
                            <div className="media">
                            <div><i className="icon ion-link tx-24 lh-0"></i></div>
                            <div className="media-body mg-l-15 mg-t-4">
                                <h6 className="tx-14 tx-gray-700">Websites</h6>
                                <a href="" className="d-block">http://themepixels.me</a>
                                <a href="" className="d-block">http://themeforest.net</a>
                            </div>
                            </div>
                            <div className="media mg-t-25">
                            <div><i className="icon ion-ios-telephone-outline tx-24 lh-0"></i></div>
                            <div className="media-body mg-l-15 mg-t-4">
                                <h6 className="tx-14 tx-gray-700">Phone Number</h6>
                                <span className="d-block">+1 234 5678 910</span>
                            </div>
                            </div>
                            <div className="media mg-t-25">
                            <div><i className="icon ion-ios-email-outline tx-24 lh-0"></i></div>
                            <div className="media-body mg-l-15 mg-t-4">
                                <h6 className="tx-14 tx-gray-700">Email Address</h6>
                                <span className="d-block">yourname@sample.com</span>
                            </div>
                            </div>
                            <div className="media mg-t-25">
                            <div><i className="icon ion-social-twitter tx-18 lh-0"></i></div>
                            <div className="media-body mg-l-15 mg-t-2">
                                <h6 className="tx-14 tx-gray-700">Twitter</h6>
                                <a href="#" className="d-block">@themepixels</a>
                            </div>
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