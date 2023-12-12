import Header from "./components/Header";
import Banner from "./components/Banner";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <GlobalStyles />
      <Header />
      <Banner />
      <Techs />
      <Projects />
      <Social />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
