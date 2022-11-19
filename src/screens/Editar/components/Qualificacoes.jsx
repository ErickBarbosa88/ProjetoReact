import { useCurriculo } from "../../../context/useCurriculo";

export default function Qualificacao({ item }) {
  const { qualificacoes, setQualificacoes } = useCurriculo();

  function remove() {
    setQualificacoes(
      qualificacoes.filter((qualificacao) => qualificacao.id != item.id)
    );
  }
  return (
    <div className="input-qualificacoes-container">
      <div className="title">
        <label>Titulo:</label>
        <input value={item.title} className="add-task-input" />
      </div>
      {item.itens.map((itemLista) => {
        return (
          <div className="itens">
            <input value={itemLista} className="add-task-input" />
          </div>
        );
      })}
      <p onClick={() => remove()}>Excluir</p>
    </div>
  );
}
