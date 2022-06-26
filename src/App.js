import Navbar from "./components/Navbar";
import Buhne from "./components/Buhne";
import Ablauf from "./components/Ablauf";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Buhne />
      <Ablauf />
      <Testimonial /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
