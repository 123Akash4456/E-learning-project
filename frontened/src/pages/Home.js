import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTour from "../components/Featured-tours/FeaturedTour";
import experienceImg from '../assets/images/experience.png';
import MasonaryImagesGallery from "../components/Image-gallery/MasonaryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex-align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
              <p>“Life is short, and the world is wide.”<br/>
 “It’s not what you look at that matters. It’s what you see.”<br/>
 “The goal is to die with memories not dreams.” <br/>
 “Sandy Toes sunkissed nose.”</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg} alt=''/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt='' controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt=''/>
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services_subtitle">What We Serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      {/*---tour section start----*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured_tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTour/>
          </Row>
        </Container>
      </section>
      {/*---tour section end----*/}

      {/*experience section start */}
<section>
  <Container>
    <Row>
      <Col lg='6'>
        <div className="experience_content">
          <Subtitle subtitle={'Experience'}/>
          <h2>With our all experience<br/>we will serve you </h2>
          <p>This is so incredibly true, and relevant to so many aspects of life.<br/> Whether it’s a job, relationship, place or friendship, we tend to settle in the places we are comfortable, without necessarily wondering if they’re good for us.</p>
        </div>
        <div className="counter_wrapper d-flex align-items-center gap-5">
          <div className="counter_box">
            <span>12k+</span>
            <h6>Successfull Trip</h6>
          </div>
          <div className="counter_box">
            <span>2k+</span>
            <h6>Regular Clients</h6>
          </div>
          <div className="counter_box">
            <span>15</span>
            <h6>Years Experience</h6>
          </div>
        </div>
      </Col>
      <Col lg='6'>
        <div className="experience_img">
          <img src={experienceImg} alt=""/>
        </div>
      </Col>
    </Row>
  </Container>
</section>
      {/*experience section end */}

      {/*------gallery section starts---- */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery_title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
                <MasonaryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*------gallery section ends---- */}

    {/*--testimonial section start */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial_title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*--testimonial section end */}
    <Newsletter/>
    </>
  );
};

export default Home;
