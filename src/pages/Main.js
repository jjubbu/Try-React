import { history } from "../redux/store";

// 커밋테스스스스트 메세지는 과연 중복될까

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
