import React from "react";
import { Link } from "react-router-dom";
import PlaySong from "../../components/Audio";


export default function Home() {
    return (
        <>
        <div className="Tela-Home">
            <Link to ="TelaPrincipal">Entrar</Link>
            <PlaySong />   
     
        </div>
        </>
    )

}