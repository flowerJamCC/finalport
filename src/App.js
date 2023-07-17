import "./App.css";
import About from "./components/about/About";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import SliderOne from "./components/sliderone/SliderOne";
import SliderTwo from "./components/slidertwo/SliderTwo";

import dashboard from "./media/dashboard.png";
import reacto from "./media/reacto.png";
import shoeswebsite from "./media/shoeswebsite.png";

const slides = [
  { url: dashboard, title: "Dashboard" },
  { url: reacto, title: "Login" },
  { url: shoeswebsite, title: "Shoes Web App" },
];

function App() {
  return (
    <div className="App">
      <Nav />
      <SliderOne />
      <SliderTwo />
      <About />
      <Projects />
      <div className="next-proj">
        <div className="slide-container">
          <Carousel slides={slides} />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
