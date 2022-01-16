import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorQuill = () => {
  const [value, setValue] = React.useState(
    "<strong>수정페이지일때 여기에 기존 게시글 내용 넣어주긔</strong>"
  );
  const change = (e) => {
    setValue(e);
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <React.Fragment>
      <ReactQuill
        value={value}
        onChange={change}
        modules={modules}
        formats={formats}
      />
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        테스트버튼
      </button>
      <h1>여기 아래로 결과물 출력</h1>
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </React.Fragment>
  );
};

export default EditorQuill;
