import React from "react";
import { Link } from "react-router-dom";

import PlaySong from "../../components/Audio";
import "./Home.css";

export default function Home() {
  return (
    <>
    <div className="entrar-container">

      <div className="Tela-Home-container">
        <Link to="/tela-principal"><button className="glow-on-hover">ENTRAR</button></Link>
        <PlaySong />
      </div>
    </div>
    </>
  );
}
