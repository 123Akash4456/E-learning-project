import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

    //sending data to server
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(booking);
    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in");
      }
      const res = await fetch(`${BASE_URL}/booking`,{
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
          <h3>
            ${price} <span>/per person</span>
          </h3>
          <span className="tour_rating d-flex align-items-center">
            <i className="ri-star-fill"></i>
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span>
        </div>
        {/*--- booking form start---- */}
        <div className="booking_form">
          <h5>Information</h5>
          <Form className="booking_info-form" onSubmit={handleClick}>
            <FormGroup>
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                placeholder="Phone"
                id="phone"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="d-flex align-items-center gap-3">
              <input
                type="date"
                placeholder=""
                id="bookAt"
                required
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Guest"
                id="guestSize"
                required
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </div>
        {/*--- booking form end ---- */}
        {/* -----booking bottom start--- */}
        <div className="booking_bottom">
          <ListGroup>
            <ListGroupItem className="border-0 px-0">
              <h5 className="d-flex align-items-center gap-1">
                ${price}
                <i className="ri-close-line"></i>1 person
              </h5>
              <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Service charges</h5>
              <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
              <h5>Total</h5>
              <span>${totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}>
            Book Now
          </Button>
        </div>
        {/* -----booking bottom end--- */}
      </div>
    </>
  );
};

export default Booking;
