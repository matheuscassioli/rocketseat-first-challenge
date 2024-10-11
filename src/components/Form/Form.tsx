import React, { FormEvent, useState } from "react";
import styles from "./Form.module.css";
import { GrTrash } from "react-icons/gr";
import InfoUpperList from "../InfoUpperList/InfoUpperList";

type Item = {
  item: string;
  id: number;
};

const Form = () => {
  const [list, setList] = useState<Item[]>([{ item: "lavar a louça", id: 1 }]);
  const [inputValue, setInputValue] = useState<string>("");
  const [checkedItens, setCheckedItens] = useState<number[]>([]);

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() == "") {
      alert("O campo novo item não pode ser vazio.");
      return;
    }
    setList((state) => {
      return [...state, { item: inputValue, id: state.length + 1 }];
    });

    setInputValue("");
  };

  const removeItem = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    const newListAfterRemove = list.filter(
      (itemFilter) => itemFilter.id !== id
    );

    if (checkedItens.includes(id)) {
      setCheckedItens(() => {
        return checkedItens.filter((idRemove) => {
          return idRemove !== id;
        });
      });
    }
    setList(newListAfterRemove);
  };

  const checkItemList = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault(); 
    setCheckedItens((state) => {
      if (!checkedItens.includes(id)) {
        return [...state, id];
      } else {
        return checkedItens.filter((itemDischecked) => {
          return itemDischecked !== id;
        });
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleAddItem}>
      <h1>Lista de itens</h1>

      <div className={styles.boxNewItem}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </div>

      <hr />

      <InfoUpperList
        list={list}
        markedItens={checkedItens}
        setList={setList}
        setCheckedItens={setCheckedItens}
      />

      <ul className={styles.list}>
        {list.length ? (
          list.map((item) => (
            <div className={styles.items} key={item.id}>
              <button
                title="Remover item"
                onClick={(e) => removeItem(e, item.id)}
              >
                <GrTrash size={20} />
              </button>
              <li>{item.item}</li>
              <div
                onClick={(e) => checkItemList(e, item.id)}
                style={
                  checkedItens.includes(item.id)
                    ? { background: "rgb(215, 22, 229)" }
                    : {}
                }
                className={styles.checkItem}
              ></div>
            </div>
          ))
        ) : (
          <div className={styles.emptyMessage}>Não há itens na lista</div>
        )}
      </ul>
    </form>
  );
};

export default Form;
