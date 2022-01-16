import React from "react";
import EditorQuill from "../components/EditorQuill";
import Tiptap from "../components/Tiptap";

const TextEditor = () => {
    return (
        <React.Fragment>
            <Tiptap/>
            <EditorQuill/>
        </React.Fragment>
    )
}
export default TextEditor;