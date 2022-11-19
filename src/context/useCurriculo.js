import { useState, createContext, useContext } from "react";

const CurriculoContext = createContext();

export const CurriculoProvider = ({ children }) => {
  const [nome, setNome] = useState("Isadora Tavares");
  const [resumo, setResumo] = useState(
    "Professor de Inglês como Segunda Língua competente na utilização de métodos de ensino eficazes centrando-se nas necessidades individuais de cada"
  );
  const [qualificacoes, setQualificacoes] = useState([
    {
      id: 1,
      title: "Comunicacionais",
      itens: [
        "Avalie os alunos para avaliar suas habilidade, pontos fortes e pontos fracos",
        "Trabalhar com alunos individuais para desafiá-los, melhorar suas habilidades e trabalhar em suas fraquezas.",
      ],
    },
    {
      id: 2,
      title: "Competencia",
      itens: [
        "Envolva os alunos na aprendizagem e adapte as lições ás necessidades de cada aluno.",
        "Assistira os alunos a desenvolver novas habilidades e obter uma apreciação pelo conhecimento e aprendizado.",
      ],
    },
  ]);
  const [historicos, setHistoricos] = useState([
    {
      id: 1,
      inicio: "Jun 2016",
      fim: "Atual",
      cargo: "Professora Adjunta",
      local: "Redonda Universidade - Rio de Janeiro, RJ",
      tarefas: [
        "Colaborou com professores e chefes de departamento para cumprir os objetivos educativos trimestrais e anuais",
        "Desevolveu programas sazonais com eênfase no vocabulário, na pronúncia e na compreensão escrita.",
      ],
    },
    {
      id: 2,
      inicio: "Out 2013",
      fim: "Fev 2016",
      cargo: "Professora Adjunta",
      local: "Locais Universidade - Rio de Janeiro, RJ",
      tarefas: [
        "Coordenou a comunicação entre os alunos e a administração da escola, de forma a criar um ambiente de aprendizagem eficaz.",
        "Auxiliou o chefe do departamento na determinação de programas diários, programas curriculates e atividades de português.",
      ],
    },
  ]);
  return (
    <CurriculoContext.Provider
      value={{
        nome,
        setNome,
        resumo,
        setResumo,
        qualificacoes,
        setQualificacoes,
        historicos,
        setHistoricos,
      }}
    >
      {children}
    </CurriculoContext.Provider>
  );
};

export const useCurriculo = () => {
  return useContext(CurriculoContext);
};
