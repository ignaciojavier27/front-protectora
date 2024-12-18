import Separator from "../shared-components/Separator";
import Hero from "./Hero.jsx";
import Info from "./Info.jsx";
import InfoAboutUs from "./InfoAboutUs.jsx";
import InfoLocation from "./InfoLocation.jsx";
import InfoServices from "./InfoServices.jsx";
import Testimonios from "./Testimonios.jsx";

const Main = () => {
  return (
    <main> 
      <Hero />
      <Info />
      <Separator color1="#f8f0eb" color2="#1a6da9" height="100px" />
      <InfoServices />
      <Separator color1="#f8f0eb" color2="#1a6da9" height="100px" />
      <InfoAboutUs />
      <InfoLocation />
      <Testimonios />
      <br />
      <br />  
    </main>
  );
};

export default Main;
