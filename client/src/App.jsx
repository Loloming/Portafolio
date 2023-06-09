import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
    <div className="container">
      <Header />
      <Presentation />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
