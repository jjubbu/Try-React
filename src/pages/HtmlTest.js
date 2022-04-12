import React from "react";

const HtmlTest = () => {
  const [progress, setProgress] = React.useState(0);

  const progressAction = (e) => {
    const name = e.target.getAttribute("name");
    if (progress > 0 && progress < 100) {
      name === "minus"
        ? setProgress(progress - 10)
        : setProgress(progress + 10);
    } else if (progress === 0 && name === "plus") {
      setProgress(progress + 10);
    } else if (progress === 100 && name === "minus") {
      setProgress(progress - 10);
    }
    console.log(progress);
  };
  return (
    <React.Fragment>
      <main>
        <h1>딱히 리액트 중심은 아니지만 html 테스트해보는 페이지</h1>
        <p>
          니꼬쌤 영상{" "}
          <a href="https://www.youtube.com/watch?v=EMOlLLTAZMs">이거</a> 보고
          해봄
        </p>

        <h2>progress</h2>
        <div>
          <button name="minus" onClick={progressAction}>
            {String("<<")}
          </button>
          <button name="plus" onClick={progressAction}>
            {String(">>")}
          </button>
        </div>

        <progress value={progress} min="0" max="100" />

        <h2>details & summary</h2>
        <details>
          <summary>펼쳐보자!</summary>
          <span>닫아라...</span>
        </details>

        <h2>input type="date"</h2>
        <input type="date" />
        <input type="month" />
        <p>이건 알고있었당.</p>

        <h2>datalist</h2>
        <label for="dataInput">자동완성기능을 html만으로?!</label>
        <input type="text" list="testList" id="dataInput" />
        <datalist id="testList">
          <option value="가나다" />
          <option value="감자" />
          <option value="바나나" />
          <option value="토뭬에에에토" />
          <option value="서~윗포테토" />
          <option value="감자칩" />
          <option value="오버워치" />
        </datalist>
      </main>
    </React.Fragment>
  );
};

export default HtmlTest;
