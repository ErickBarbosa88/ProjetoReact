import React from "react";
import { Link } from "react-router-dom";
import PlaySong from "../../components/Audio";
import "./Home.css"


export default function Home() {
    return (
        <>
        <div className="Tela-Home-container">
            <Link to ="TelaPrincipal">Entrar</Link>
            <PlaySong />   
            
        </div>
        </>
    )

}