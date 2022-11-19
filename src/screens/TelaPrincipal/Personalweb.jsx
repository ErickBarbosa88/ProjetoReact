import React from "react";
import { Link } from "react-router-dom";
import { useCurriculo } from "../../context/useCurriculo";
import "./Personalweb.css";

export default function Personalweb() {
  const { nome, resumo, qualificacoes, historicos } = useCurriculo();
  return (
    <div className="tela-principal-container">
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
          <div>
            {qualificacoes.map((qualificacao) => {
              console.log(qualificacao);
              return (
                <div>
                  <h4>{qualificacao.title}</h4>
                  <ul>
                    {qualificacao.itens.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <h3>Histórico profissional</h3>
        <div>
          {historicos.map((historico) => {
            return (
              <div className="historico-container">
                <div>
                  <p>
                    {historico.inicio} - {historico.fim}
                  </p>
                  <strong>{historico.cargo}</strong>
                  <p>{historico.local}</p>
                </div>
                <div>
                  <ul>
                    {historico.tarefas.map((tarefa) => {
                      return <li>{tarefa}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
