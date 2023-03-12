import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/mainPage/Main";
import Services from "./components/servicesPage/Services";
import Stack from "./components/techStack/Stack";
import Footer from "./components/footer/Footer.jsx";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
