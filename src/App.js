import "./App.css";
// import AppRouter from "./router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/aboutMe/About";

function App() {
  return (
    <div>
      {/* <AppRouter/> */}
      <Navbar />

      <main>
        <Home />
        <About/>
      </main>
    </div>
  );
}

export default App;
