import "./App.css";
// import AppRouter from "./router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/aboutMe/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/portfolio/Portfolio";
import ScrollBtn from "./components/scrollTop/ScrollBtn";

function App() {
  return (
    <div className="container">
      {/* <AppRouter/> */}
      <Navbar />
      <ScrollBtn />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
