
import React, { useState } from 'react';

 const ShowMore = ({content, limit}) => {
    const [show, setShow] = useState(true);
    const changeshow = () => { 
        setShow(!show);
    }

    return (
        <div>
                {
                    content.length <= limit ?
                    (
                        <p className="tx-13 mg-b-0">{content}</p>
                    ):
                    (   
                        
                        show ? (
                            <div>
                                <span className="tx-13 mg-b-0" >{content.substring(0,limit) + ' ...'}</span>
                                <span className="text-success pointer" onClick={changeshow}> Show more</span>
                            </div>
                        ): (
                            <div>
                                <span className="tx-13 mg-b-0" >{content}</span>
                                <span className="text-success pointer" onClick={changeshow}> Show less</span>
                            </div>
                        )
                        
                        
                    )
                }
            
        </div>
    )  
} 

export default ShowMore;

// <p class="tx-13 mg-b-0"  [innerHtml]="value" *ngIf="value.length <= limit"></p>
// <div *ngIf="value.length > limit">
//     <div *ngIf="show">
//         <span class="tx-13 mg-b-0" [innerHtml]="value.substring(0,limit) + ' ...'"></span>
//         <span class="text-success pointer" (click)="show = !show"> Show more</span>
//     </div>
//     <div *ngIf="!show">
//         <span class="tx-13 mg-b-0" [innerHtml]="value"></span>
//         <span class="text-success pointer" (click)="show = !show"> Show less</span>
//     </div>
// </div>