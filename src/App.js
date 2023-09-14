import "./App.css";
// import AppRouter from "./router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      {/* <AppRouter/> */}
      <Navbar />

      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
