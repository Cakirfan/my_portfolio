import "./App.css";
// import AppRouter from "./router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/aboutMe/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/portfolio/Portfolio";
import ScrollBtn from "./components/scrollTop/ScrollBtn";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="container">
      {/* <AppRouter/> */}
      <Navbar />
      <main>
        <ScrollBtn />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Services/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
