import { FormEvent, useState } from "react";
import styles from "./App.module.css";

function App() {
  //   - Adicionar uma nova tarefa
  // - Marcar e desmarcar uma tarefa como concluída
  // - Remover uma tarefa da listagem
  // - Mostrar o progresso de conclusão das tarefas

  const [list, setList] = useState(["lavar a louça"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() == "") {
      alert("O campo novo item não pode ser vazio.");
      return;
    }
    setList((state) => {
      return [...state, inputValue];
    });

    setInputValue("");
  };

  const removeItem = (e: React.MouseEvent<HTMLButtonElement>, item: string) => {
    e.preventDefault();
    const newListAfterRemove = list.filter((itemFilter) => {
      return itemFilter !== item;
    });
    setList(newListAfterRemove);
  };

  return (
    <>
      <form onSubmit={handleAddItem}>
        <h1>Lista cru, somente parte lógica</h1>

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Adicionar</button>

        <ul className={styles.list}>
          {list.length ? (
            list.map((item) => {
              return (
                <div key={item} className={styles.items}>
                  <button onClick={(e) => removeItem(e, item)}>Remover</button>
                  <li>{item}</li>
                  <input type="checkbox" />
                </div>
              );
            })
          ) : (
            <div>Não há itens na lista :(</div>
          )}
        </ul>
      </form>
    </>
  );
}

export default App;
