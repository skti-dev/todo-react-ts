import { useState } from "react";

// import { Container } from "./App.styles";
import * as C from "./App.styles";

import { Item } from "./types/Item";

import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 0, name: "Make a to do list with React + TypeScript", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    setList((prevList) => [
      ...prevList,
      { name: taskName, id: prevList.length, done: false },
    ]);
  };

  const toggleDone = (id: number, state: boolean) => {
    setList((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) item.done = state;
        return item;
      });
    });
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>ToDo</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.length && (
          <ul>
            {list.map((item) => {
              return (
                <ListItem key={item.id} item={item} onToggle={toggleDone} />
              );
            })}
          </ul>
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;
