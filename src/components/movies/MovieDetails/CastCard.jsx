
import React from 'react';

const CastCard = ({casts}) => {

    const getImage = (cast) => {
        if(cast.profile_path != null){
            return `https://image.tmdb.org/t/p/w300${cast.profile_path}`;
        }else{
            return `http://via.placeholder.com/150x350&text=${cast.name}`;
        }
    }

    return (
        <div>

            {/* <div className="list-group list-group-user">
                {
                    casts.map((cast) => (
                        <div className="list-group-item">
                            <img src={getImage(cast)} alt="" />
                            <span className="user-name-address">
                                <p>{cast.name}</p>
                                <span>{cast.character}</span>
                            </span>
                            <span className="user-btn-wrapper">
                                <a href="#" className="btn btn-outline-light btn-icon">
                                    <span className="tx-20">
                                        <ion-icon name="open-outline"></ion-icon>
                                    </span>
                                </a>
                            </span>
                        </div>
                    ))
                }
            </div> */}

            {/* <div className="row desktop-view">
                <div className="mail-list">
                    {
                        casts.map((cast) => (
                            <div className="mail-item d-flex active">
                                <div className="pd-t-5">
                                    <img src={getImage(cast)} className="wd-48 rounded-circle" alt="" />
                                </div>
                                <div className="mg-l-20">
                                    <h6 className="tx-14"><a href="" className="tx-inverse">{cast.name}</a></h6>
                                    <p className="tx-13 mg-b-10">{cast.character}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div> */}

            <div className="row mobile-view">
                {
                    casts.map((cast, idx) => (
                        <div className="card bd-0 col-md-4 col-sm-12 mg-t-5" key={idx}>
                            <img className="img-fluid" src={getImage(cast)} alt="Image" />
                            <div className="card-body bd bd-t-0">
                            <div className="card-text text-center">
                                <div className="tx-inverse mg-b-0 tx-bold">
                                    {cast.name}
                                </div>
                                <div>
                                    {cast.character}
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CastCard;