import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "The journey of a thousand miles begins with a single step.",
  },
  {
    imgUrl: guideImg,
    title: "Best Guide",
    desc: "Respect for ourselves guides our morals, respect for others guides our manners. ...",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Just because something is traditional is no reason to do it, of course.",
  },
];
const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
