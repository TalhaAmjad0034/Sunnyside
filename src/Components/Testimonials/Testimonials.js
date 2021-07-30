import React from "react";
import "./Testimonials.css";
// import { TestimonialsData } from "./TestimonialsData";
// import img from "../../images/image-emily.jpg";

const Testimonials = (props) => {
  return (
    <>
      <div className="test-wrapper">
        <div className="testimonials-header">
          <h4>Client Testimonials</h4>
        </div>
        <div className="testimonials">
          {/* {props.Data.map((items) => (
              <h1>{items.title}</h1>
            ))} */}

          {props.Data.map((items) => (
            <div className="test_cards">
              <figure className="person__picture">
                <img src={items.pic} alt="" className="person__img" />
                <figcaption className="person__about">
                  <p className="person__paragraph">{items.title}</p>
                </figcaption>
                <div className="person__description">
                  <h4 className="person__name">{items.Name}</h4>
                  <p className="person__career">{items.post}</p>
                </div>
              </figure>
            </div>
          ))}

          {/* 
            <figure className="person__picture">
              <img src={img} alt="" className="person__img" />
              <figcaption className="person__about">
                <p className="person__paragraph">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
              </figcaption>
              <div className="person__description">
                <h4 className="person__name">Emily R.</h4>
                <p className="person__career">Marketing Director</p>
              </div>
            </figure> */}

          {/* <div className="test_cards">
            <figure className="person__picture">
              <img src={img} alt="" className="person__img" />
              <figcaption className="person__about">
                <p className="person__paragraph">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
              </figcaption>
              <div className="person__description">
                <h4 className="person__name">Emily R.</h4>
                <p className="person__career">Marketing Director</p>
              </div>
            </figure>
          </div>
          <div className="test_cards">
            <figure className="person__picture">
              <img src={img} alt="" className="person__img" />
              <figcaption className="person__about">
                <p className="person__paragraph">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
              </figcaption>
              <div className="person__description">
                <h4 className="person__name">Emily R.</h4>
                <p className="person__career">Marketing Director</p>
              </div>
            </figure>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
