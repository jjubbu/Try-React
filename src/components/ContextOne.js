import React from "react";
import { Cont } from "../pages/ContextAPI";

const ContextOne = () => {
  const { item, addItem } = React.useContext(Cont);
  const text = React.useRef();
  const buttonClick = () => {
    addItem(text.current.value);
  };

  return (
    <>
      {item.one} {item.add}
      <input ref={text} />
      <button onClick={buttonClick}>출력</button>
    </>
  );
};

export default ContextOne;
