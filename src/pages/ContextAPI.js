import React from "react";
import ContextOne from "../components/ContextOne";
import ContextTwo from "../components/ContextTwo";

export const Cont = React.createContext();

const initialItems = {
  one: "하나!",
  two: ["둘", "셋", "넷"],
  add: "문구를 변경해보자.",
};

const ContextAPI = () => {
  const [item, setItem] = React.useState(initialItems);
  const addItem = (newItem) => {
    setItem({ ...item, add: newItem });
  };

  return (
    <div>
      <Cont.Provider value={{ item, addItem }}>
        <ContextOne />
        <ContextTwo />
      </Cont.Provider>
    </div>
  );
};
export default ContextAPI;

// contextAPI
// 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리
