import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Plan from "./pages/Plan/Plan";
import VideoMaterial from "./pages/VideoMaterial/VideoMaterial";
import Header from "./components/Header/Header";
import QuoteWithPhoto from "./components/QuoteWithPhoto/QuoteWithPhoto";
import FeelingWords from "./components/FeelingWords/FeelingWords";
import BestYogaPlan from "./components/BestYogaPlan/BestYogaPlan";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import FindOnInstagram from "./components/FindOnInstagram/FindOnInstagram";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <QuoteWithPhoto />
      <Plan />
      <VideoMaterial />
      <FeelingWords />
      <BestYogaPlan />
      <FindOnInstagram />
      <Footer />
    </div>
  );
}

export default App;
