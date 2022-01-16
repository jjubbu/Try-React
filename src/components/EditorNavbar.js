import React from 'react';

import { Editor } from '@tiptap/react';

// import {   BoldSVG,   BulletsSVG,   ImageSVG,   ItalicSVG,   LinkSVG,
// StrikeSVG,   UnderlineSVG, } from '~/assets'

const EditorNavbar = ({ editor }) => {
  const upload = (file) => {
    // handle upload logic here
    return new Promise((resolve, reject) => {
      resolve('success');
    });
  };

  if (!editor) {
    return null;
  }

  // Adding anchor link
  const setLink = () => {
    const url = window.prompt('URL');

    if (!url) return;

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  // Adding image to the editor
  const addImage = (url) => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  // list of extensions i am using
  const extentions = [
    {
      title: 'Link',
      key: 'link',
      command: setLink,
      disabled: false,
    },
  ];

  const handleChange = (e) => {
    if (!e?.target?.files?.[0])
      upload(e.target.files[0])
        .then((res) => console.log('res:::', res))
        .catch((err) => console.error(err));

    console.log(e.target.files[0]);
  };

  return (
    <div className="editor-navbar-container">
      {extentions.map((extention) => (
        <button
          key={extention.key}
          className={editor.isActive(extention.key) ? 'active' : ''}
          disabled={extention.disabled}
          title={extention.title}
          type="button"
          onClick={() => extention.command()}
        >
          {extention.icon}
        </button>
      ))}
      {/* Add a hidden input file type */}
      <label className="inline-block px-2 cursor-pointer" htmlFor="upload">
        <input
          className="hidden"
          id="upload"
          type="file"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default EditorNavbar;

// interface INavbarProps {   editor: Editor | null }
