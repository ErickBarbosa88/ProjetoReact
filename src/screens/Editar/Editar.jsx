import Button from "../../components/Button/Button";
import { useCurriculo } from "../../context/useCurriculo";
import Historico from "./components/Historico";
import Qualificacao from "./components/Qualificacoes";
import "./Editar.css";

export default function Editar() {
  const { nome, setNome, resumo, setResumo, qualificacoes, historicos } =
    useCurriculo();
  return (
    <div className="container">
      <div className="add-task-container input-container">
        <label>Nome: </label>
        <input
          value={nome}
          className="add-task-input"
          type="text"
          onChange={(novonome) => {
            setNome(novonome.target.value);
          }}
        />
      </div>
      <div className="add-task-container input-container">
        <label>Resumo: </label>
        <textarea
          value={resumo}
          className="add-task-input"
          type="text"
          onChange={(novoresumo) => {
            setResumo(novoresumo.target.value);
          }}
        />
      </div>
      <div>
        <label>Qualificações: </label>
        <div>
          {qualificacoes.map((qualificacao) => {
            return <Qualificacao item={qualificacao} />;
          })}
        </div>
        <div className="add-task-button-container">
          <Button onClick={() => {}}>Adicionar Qualificacao</Button>
        </div>
      </div>
      <div>
        <label>Historico:</label>
        <div>
          {historicos.map((historico) => {
            return <Historico item={historico} />;
          })}
        </div>
      </div>
    </div>
  );
}
