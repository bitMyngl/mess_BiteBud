import React from "react";
import "./../styles/commentsegmentslide.css";

function CommentSegmentSlide(){
    return(
        <div className="outer-swiper-plate">
            <div className="swiper-client-message">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi porro in eum quam reiciendis. Voluptatum vel nihil ratione enim facere veniam eveniet soluta repellat porro!
                </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                 
                    <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/08/21181242/best-zhao-lusi-dramas-chinese-tv-shows-hidden-love-the-roance-of-tiger-and-rose-dating-in-the-kitchen-rosy-zhao-1234x900.jpg?tr=w-1600" alt="" srcset="" />
                 
                 <div className="client-data-details">
                    <p>Sourajit Mandal</p>
                    <p>Entrepreneur</p>
                 </div>
            </div>
        </div>
    );
}

export default CommentSegmentSlide;