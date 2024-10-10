import React, { FormEvent, useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
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
    <form className={styles.form} onSubmit={handleAddItem}>
      <h1>Lista de itens</h1>

      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Adicionar</button>
      </div>

      <ul className={styles.list}>
        {list.length ? (
          list.reverse().map((item) => {
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
  );
};

export default Form;
