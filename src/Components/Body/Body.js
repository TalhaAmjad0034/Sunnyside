import React from "react";
import "./Body.css";
import img1 from "../../images/desktop/image-transform.jpg";
import img2 from "../../images/desktop/image-stand-out.jpg";
import img3 from "../../images/desktop/image-graphic-design.jpg";
import img4 from "../../images/desktop/image-photography.jpg";

const Body = () => {
  const Bodycard = [
    {
      title: "Transform Your brand",
      para: "We are full-service creative agency specializing in helping brands to grow fast. Engage your clients through compelling visuls that do most of the marketing for you.",
      pic: img1,
    },
    {
      title: `Stand out to the right audience`,
      para: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your btand in digital places.`,
      pic: img2,
    },
  ];

  const Bodycard2 = [
    {
      title: "Graphic design",
      para: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
      pic: img3,
    },
    {
      title: "Photography",
      para: `Increase your credibility by getting the most stunning, high-quality photos that improve your business image.`,
      pic: img4,
    },
  ];
  return (
    <>
      <div className="body">
        <div className="part1">
          <div className="bodydata">
            <h1>{Bodycard[0].title}</h1>
            <p>{Bodycard[0].para}</p>
            <a href="#">Learn more</a>
          </div>
          <img src={Bodycard[0].pic} />
        </div>

        <div className="part2">
          <div className="bodydata">
            <h1>{Bodycard[1].title}</h1>
            <p>{Bodycard[1].para}</p>
            <a href="#">Learn more</a>
          </div>
          <img src={Bodycard[1].pic} />
        </div>

        <div className="twodivs">
          <div>
            <div>
              <img src={Bodycard2[0].pic} />
            </div>
            <div className="twodivs-content">
              <h3>{Bodycard2[0].title}</h3>
              <p>{Bodycard2[0].para}</p>
            </div>
          </div>

          <div>
            <div>
              <img src={Bodycard2[1].pic} />
            </div>
            <div className="twodivs-content">
              <h3>{Bodycard2[1].title}</h3>
              <p>{Bodycard2[1].para}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
