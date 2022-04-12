import React from "react";
import { Cont } from "../pages/ContextAPI";

const ContextTwo = () => {
  const { item } = React.useContext(Cont);
  return <>{item.two}</>;
};

export default ContextTwo;
