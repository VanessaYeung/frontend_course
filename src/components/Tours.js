/* eslint-disable no-lone-blocks */
import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";
export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center tours-center">
        {/* <!-- first tour  --> */}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

{
  /* <div className="tour-img-container">
<img
  src="./images/about.jpeg"
  className="tour-img"
  alt="tour image1"
/>
<p className="tour-date">14/08/2024</p>
</div>
<div className="tour-info">
<div className="tour-title">
  <h4>tibet adventure</h4>
</div>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
  possimus.
</p>
<div className="tour-footer">
  <p>
    <span>
      <i className="fas fa-map"></i>
    </span>
    china
  </p>
  <p>6 days</p>
  <p>from $2100</p>
</div>
</div>
</article>
<article className="tour-card">
<div className="tour-img-container">
<img
  src="./images/main.jpg"
  className="tour-img"
  alt="tour image2"
/>
<p className="tour-date">14/08/2024</p>
</div>
<div className="tour-info">
<div className="tour-title">
  <h4>tibet adventure</h4>
</div>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
  possimus.
</p>
<div className="tour-footer">
  <p>
    <span>
      <i className="fas fa-map"></i>
    </span>
    china
  </p>
  <p>6 days</p>
  <p>from $2100</p>
</div>
</div>
</article>
<article className="tour-card">
<div className="tour-img-container">
<img
  src="./images/about.jpg"
  className="tour-img"
  alt="tour image3"
/>
<p className="tour-date">14/08/2024</p>
</div>
<div className="tour-info">
<div className="tour-title">
  <h4>tibet adventure</h4>
</div>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
  possimus.
</p>
<div className="tour-footer">
  <p>
    <span>
      <i className="fas fa-map"></i>
    </span>
    china
  </p>
  <p>6 days</p>
  <p>from $2100</p>
</div>
</div>
</article>
<article className="tour-card">
<div className="tour-img-container">
<img
  src="./images/trip_alishan.jpg"
  className="tour-img"
  alt="tour image4"
/>
<p className="tour-date">14/08/2024</p>
</div>
<div className="tour-info">
<div className="tour-title">
  <h4>tibet adventure</h4>
</div>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
  possimus.
</p>
<div className="tour-footer">
  <p>
    <span>
      <i className="fas fa-map"></i>
    </span>
    china
  </p>
  <p>6 days</p>
  <p>from $2100</p>
</div>
</div>
</article> */
}
