
import React from 'react';
import ShowMore from '../../shared/ShowMore';

const Reviews = ({reviews}) => {
    
    return (
            reviews.length ? (
                <div className="list-group list-group-user">
                    {
                        reviews.map((review) => (
                            <div className="list-group-item d-block pd-y-20">
                                <div className="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                                    <a href="" className="tx-info">{review.author}</a>
                                </div>
                                <p className="tx-13 mg-b-0">
                                    <ShowMore content={review.content} limit="400"/>
                                </p>
                            </div>
                        ))
                    }
                </div> 
            ): ('No Reviews')
    )

}


export default Reviews;