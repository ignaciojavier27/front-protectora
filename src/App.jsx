import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css'
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
    )
}

export default App
