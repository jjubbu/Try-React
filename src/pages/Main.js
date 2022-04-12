import { history } from "../redux/store";
//테에에에스트
//텟테테렛테..
//이번에도 중복된다면 나는 바지에 똥을 쌀거야
//제발 이번이 마지막이길~~
//이번이 진짜 제발 마지막이길~~~
const Main = () => {
  const goto = (e) => {
    const name = e.target.getAttribute("name");
    history.push(`/${name}`);
  };
  return (
    <>
      <button name="" onClick={goto}>
        Main
      </button>
      <button name="maps" onClick={goto}>
        Maps
      </button>
      <button name="texteditor" onClick={goto}>
        TextEditor
      </button>
      <button name="contextapi" onClick={goto}>
        ContextAPI
      </button>
      <button name="htmltest" onClick={goto}>
        Html Test
      </button>
    </>
  );
};

export default Main;
