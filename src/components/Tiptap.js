import React from "react";

import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapMenu from "./TiptapMenu";
import EditorNavbar from "./EditorNavbar";

const Tiptap = () => {
    const editor = useEditor({extensions: [StarterKit], content: 'heyWorld!'})

    return (
        <React.Fragment>
            <EditorNavbar editor={editor}/>
            <TiptapMenu editor={editor}/>
            <EditorContent editor={editor}/>
        </React.Fragment>
    )
}

export default Tiptap;