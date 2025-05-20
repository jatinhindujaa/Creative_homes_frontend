
// import { useEditor, EditorContent, Editor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

// const TiptapEditor = ({ content, setContent }) => {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content,
//     onUpdate({ editor }) {
//       setContent(editor.getHTML());
//     },
//   });

//   if (!editor) return null;

//   return (
//     <>
//       <div>
//         <button
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           disabled={!editor.can().toggleBold()}
//           className={editor.isActive("bold") ? "active" : ""}
//         >
//           Bold
//         </button>
//         <button
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           disabled={!editor.can().toggleItalic()}
//           className={editor.isActive("italic") ? "active" : ""}
//         >
//           Italic
//         </button>
//         {/* Add more buttons here */}
//       </div>
//       <EditorContent editor={editor} />
//     </>
//   );
// };
// export default TiptapEditor;



// "use client";

// import React, { useState, useEffect } from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

// const TiptapEditor = ({ content, setContent }) => {
//   const [isHtmlMode, setIsHtmlMode] = useState(false);
//   const [htmlContent, setHtmlContent] = useState(content || "");

//   const editor = useEditor({
//     extensions: [StarterKit],
//     content,
//     onUpdate: ({ editor }) => {
//       const html = editor.getHTML();
//       setContent(html);
//       setHtmlContent(html);
//     },
//   });

//   // Sync html content to prop content changes
//   useEffect(() => {
//     setHtmlContent(content);
//     if (editor && !isHtmlMode) {
//       editor.commands.setContent(content, false);
//     }
//   }, [content, editor, isHtmlMode]);

//   const toggleMode = () => {
//     setIsHtmlMode((prev) => !prev);
//   };

//   const handleHtmlChange = (e) => {
//     const val = e.target.value;
//     setHtmlContent(val);
//     setContent(val);
//     if (editor) {
//       editor.commands.setContent(val, false);
//     }
//   };

//   if (!editor) return null;

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         borderRadius: "6px",
//         padding: "10px",
//         maxWidth: 700,
//         margin: "auto",
//       }}
//     >
//       <button
//         onClick={toggleMode}
//         style={{
//           marginBottom: "8px",
//           padding: "6px 12px",
//           background: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}
//       >
//         {isHtmlMode ? "Switch to Editor" : "Edit as HTML"}
//       </button>

//       {isHtmlMode ? (
//         <textarea
//           value={htmlContent}
//           onChange={handleHtmlChange}
//           style={{
//             width: "100%",
//             minHeight: "120px", // approx 4-5 rows
//             fontFamily: "monospace",
//             fontSize: "14px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//             padding: "8px",
//             resize: "vertical",
//           }}
//           spellCheck={false}
//         />
//       ) : (
//         <div
//           style={{
//             maxHeight: "200px",
//             overflowY: "auto",
//           }}
//         >
//           <EditorContent editor={editor} />
//         </div>
//       )}

//       <style>{`
//         .ProseMirror {
//           min-height: 120px;
//           font-family: system-ui, sans-serif;
//           font-size: 14px;
//           line-height: 1.5;
//           outline: none;
//         }
//         .ProseMirror p {
//           margin: 0 0 1em 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TiptapEditor;



"use client";

import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

const TiptapEditor = ({ content, setContent }) => {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [htmlContent, setHtmlContent] = useState(content || "");

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
      setHtmlContent(html);
    },
  });

  useEffect(() => {
    setHtmlContent(content);
    if (editor && !isHtmlMode) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor, isHtmlMode]);

  const toggleMode = () => {
    setIsHtmlMode((prev) => !prev);
  };

  const handleHtmlChange = (e) => {
    const val = e.target.value;
    setHtmlContent(val);
    setContent(val);
    if (editor) {
      editor.commands.setContent(val, false);
    }
  };

  if (!editor) return null;

  // Helper button component
  const MenuButton = ({ onClick, isActive, children, title }) => (
    <button
      onClick={onClick}
      type="button"
      title={title}
      className={`menu-button ${isActive ? "active" : ""}`}
      style={{
        cursor: "pointer",
        padding: "6px 8px",
        marginRight: "4px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: isActive ? "#007bff" : "white",
        color: isActive ? "white" : "black",
        fontWeight: isActive ? "bold" : "normal",
      }}
    >
      {children}
    </button>
  );

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "10px",
        maxWidth: 700,
        margin: "auto",
      }}
    >
      <button
        onClick={toggleMode}
        style={{
          marginBottom: "8px",
          padding: "6px 12px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isHtmlMode ? "Switch to Editor" : "Edit as HTML"}
      </button>

      {!isHtmlMode && (
        <div
          style={{
            marginBottom: "8px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "6px",
            userSelect: "none",
          }}
        >
          {/* Toolbar Buttons */}
          <MenuButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
            title="Bold (Ctrl+B)"
          >
            <b>B</b>
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
            title="Italic (Ctrl+I)"
          >
            <i>I</i>
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive("underline")}
            title="Underline (Ctrl+U)"
          >
            <u>U</u>
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive("strike")}
            title="Strike"
          >
            S
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            isActive={editor.isActive("code")}
            title="Code"
          >
            {"</>"}
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
            title="Bullet List"
          >
            &bull; List
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
            title="Ordered List"
          >
            1. List
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            isActive={editor.isActive("paragraph")}
            title="Paragraph"
          >
            ¶
          </MenuButton>

          {[1, 2, 3, 4, 5, 6].map((level) => (
            <MenuButton
              key={level}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level }).run()
              }
              isActive={editor.isActive("heading", { level })}
              title={`Heading ${level}`}
            >
              H{level}
            </MenuButton>
          ))}

          <MenuButton
            onClick={() => {
              const url = prompt("Enter URL");
              if (url)
                editor
                  .chain()
                  .focus()
                  .extendMarkRange("link")
                  .setLink({ href: url })
                  .run();
            }}
            isActive={editor.isActive("link")}
            title="Add Link"
          >
            🔗
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().unsetLink().run()}
            title="Remove Link"
          >
            ❌🔗
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().undo().run()}
            title="Undo"
          >
            ↺
          </MenuButton>

          <MenuButton
            onClick={() => editor.chain().focus().redo().run()}
            title="Redo"
          >
            ↻
          </MenuButton>
        </div>
      )}

      {isHtmlMode ? (
        <textarea
          value={htmlContent}
          onChange={handleHtmlChange}
          style={{
            width: "100%",
            minHeight: "120px",
            fontFamily: "monospace",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            padding: "8px",
            resize: "vertical",
          }}
          spellCheck={false}
        />
      ) : (
        <div
          style={{
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          <EditorContent editor={editor} />
        </div>
      )}

      <style>{`
        .ProseMirror {
          min-height: 120px;
          font-family: system-ui, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          outline: none;
        }
        .ProseMirror p {
          margin: 0 0 1em 0;
        }
        .menu-button:focus {
          outline: none;
          box-shadow: 0 0 2px 2px #007bff;
        }
      `}</style>
    </div>
  );
};

export default TiptapEditor;
