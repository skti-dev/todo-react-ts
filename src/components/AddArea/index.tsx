import * as C from "./styles";
import { TbSquarePlus } from "react-icons/tb";
import { KeyboardEvent } from "react";
import useStateWithValidation from "../../hooks/useStateWithValidation";

type AreaProps = {
  onEnter: (taskName: string) => void;
};

const VALID_CODES = ["Enter", "NumpadEnter"];

export const AddArea = ({ onEnter }: AreaProps) => {
  const [text, setText, isValid] = useStateWithValidation(
    (inputText: string) => inputText.trim() !== "",
    ""
  );

  const handleKeyUp = (e: KeyboardEvent) => {
    if (VALID_CODES.includes(e.code) && isValid) {
      onEnter(text);
      setText("");
    }
  };

  return (
    <C.Area>
      <TbSquarePlus color="rgb(142 223 54)" size="2em" />
      <input
        type="text"
        placeholder="Add some task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Area>
  );
};
