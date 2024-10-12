import About from "./components/About/About"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyProjects from "./components/MyProjects/MyProjects";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
        {/* About */}
        <About />
        {/* Service */}
        <Services />
        {/* Projects */}
        <MyProjects />
        <Testimonials />
        {/* Contact Section */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App
