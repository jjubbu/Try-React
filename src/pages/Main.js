import { history } from "../redux/store";
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
    </>
  );
};

export default Main;
