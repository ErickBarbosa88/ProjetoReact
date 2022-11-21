import React from "react";
import { Link } from "react-router-dom";
import { useCurriculo } from "../../context/useCurriculo";
import "./Personalweb.css";

export default function Personalweb() {
  const { nome, resumo, qualificacoes, historicos } = useCurriculo();
  return (
    <div className="tela-principal-container">
      <h1>Clique em Editar para fazer seu Curriculo</h1>
      <div className="container">
        <div className="title">
          <h1>{nome}</h1>
          <Link to="/editar">
            <strong>Editar</strong>
          </Link>
        </div>
        <h3>Resumo</h3>
        <p>{resumo}</p>

        <h3>Qualificações</h3>
        <div>
          <ul>
            {qualificacoes.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>

        <h3>Histórico profissional</h3>
        <ul>
          {historicos.map((tarefa) => {
            return <li>{tarefa}</li>;
          })}
        </ul>
      </div>
      <Link to="/todo">
      <button className="glow-on-hover">CLIQUE PARA VER UM TODO-LIST</button>
      </Link>
        <Link to="/homeback"><button className="glow-on-hover">VOLTAR</button></Link>
    </div>
  );
}
