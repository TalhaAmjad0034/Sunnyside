import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

import img1 from "../src/images/image-emily.jpg";
import img2 from "../src/images/image-thomas.jpg";
import img3 from "../src/images/image-jennie.jpg";

import img4 from "../src/images/desktop/image-gallery-milkbottles.jpg";
import img5 from "../src/images/desktop/image-gallery-orange.jpg";
import img6 from "../src/images/desktop/image-gallery-cone.jpg";
import img7 from "../src/images/desktop/image-gallery-sugarcubes.jpg";
function App() {
  const TestData = [
    {
      title: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
      Name: `Emily R.`,
      post: `Marketing Director`,
      pic: img1,
    },
    {
      title: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
      Name: `Thomas S.`,
      post: `Chief Operating Officer`,
      pic: img2,
    },
    {
      title: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
      Name: `Jennie F.`,
      post: `Business Owner`,
      pic: img3,
    },
  ];
  const FooterData = [
    {
      pic: img4,
    },
    {
      pic: img5,
    },
    {
      pic: img6,
    },
    {
      pic: img7,
    },
  ];

  return (
    <div className="App">
      <Header />
      <Body />
      <Testimonials Data={TestData} />
      <Footer Data={FooterData} />
    </div>
  );
}

export default App;
