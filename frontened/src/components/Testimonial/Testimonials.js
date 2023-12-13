import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";


const Testimonials = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slideToScroll:1,
                    slidesToShow:1,
                },
            },
        ]
    }
  return (
    <>
      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p>
            "Just wanted to let you know that the trip was fantastic and
            everything worked out seamlessly! The hotels and the tours you
            recommended were excellent! Hotel locations in particular were
            ideal. Alessio came through as promised with the Christmas Eve mass
            tickets, and that experience was very special for us. Also, the Trip
            Plan app made things very easy for us. It was nice that we could all
            check out the daily plan at any time, and be able to pull up all the
            vouchers and tickets." -Margie K.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Prem Kalvadar</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            "Just wanted to let you know that the trip was fantastic and
            everything worked out seamlessly! The hotels and the tours you
            recommended were excellent! Hotel locations in particular were
            ideal. Alessio came through as promised with the Christmas Eve mass
            tickets, and that experience was very special for us. Also, the Trip
            Plan app made things very easy for us. It was nice that we could all
            check out the daily plan at any time, and be able to pull up all the
            vouchers and tickets." -Margie K.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Swati Yadav</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            "Just wanted to let you know that the trip was fantastic and
            everything worked out seamlessly! The hotels and the tours you
            recommended were excellent! Hotel locations in particular were
            ideal. Alessio came through as promised with the Christmas Eve mass
            tickets, and that experience was very special for us. Also, the Trip
            Plan app made things very easy for us. It was nice that we could all
            check out the daily plan at any time, and be able to pull up all the
            vouchers and tickets." -Margie K.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Suman Sharma</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            "Just wanted to let you know that the trip was fantastic and
            everything worked out seamlessly! The hotels and the tours you
            recommended were excellent! Hotel locations in particular were
            ideal. Alessio came through as promised with the Christmas Eve mass
            tickets, and that experience was very special for us. Also, the Trip
            Plan app made things very easy for us. It was nice that we could all
            check out the daily plan at any time, and be able to pull up all the
            vouchers and tickets." -Margie K.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Kavita</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            "Just wanted to let you know that the trip was fantastic and
            everything worked out seamlessly! The hotels and the tours you
            recommended were excellent! Hotel locations in particular were
            ideal. Alessio came through as promised with the Christmas Eve mass
            tickets, and that experience was very special for us. Also, the Trip
            Plan app made things very easy for us. It was nice that we could all
            check out the daily plan at any time, and be able to pull up all the
            vouchers and tickets." -Margie K.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">Prince Bharadwaj</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Testimonials;
