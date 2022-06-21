import Navbar from "./components/Navbar/Navbar";
import Buhne from "./components/Buhne/Buhne";
import Ablauf from "./components/Ablauf/Ablauf";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
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
