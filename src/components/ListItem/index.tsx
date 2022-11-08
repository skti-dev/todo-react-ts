import * as C from "./styles";
import { Item } from "../../types/Item";
import { useId } from "react";

type ListItemProps = {
  item: Item;
  onToggle: (id: number, state: boolean) => void;
};

export const ListItem = ({ item, onToggle }: ListItemProps) => {
  const id = useId();

  return (
    <C.Item done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onToggle(item.id, e.target.checked)}
        id={id}
      />
      <label htmlFor={id}>{item.name}</label>
    </C.Item>
  );
};
