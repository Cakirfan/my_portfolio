import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Typed.js konfigürasyonu
    const options = {
      strings: [
        "Front-End Developer!",
        "Freelancer!",
        "Coding Lover!",
        "Book Reader!",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    };

    // Typed.js örneği oluşturma ve bağlama
    const typed = new Typed(".auto-input", options);

    // Komponent kaldırıldığında Typed örneğini temizleme
    return () => {
      typed.destroy();
    };
  }, []); // Boş bağımlılık dizisi, komponent ilk oluşturulduğunda yalnızca bir kez çalışmasını sağlar

  return (
    <section id="home">
      <div className="home-row">
        <h1>Hi, This is</h1>
        <h1>
          Irfan Cakir<span>.</span>
        </h1>
        <p>
          i'm a <span className="auto-input"></span>
        </p>
      </div>
    </section>
  );
};

export default Home;
