"use client";

import React, { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// 1) This MenuBar is your custom toolbar
function MenuBar({ editor }) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-2 border-b pb-2">
      {/* Bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("bold") ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        Bold
      </button>

      {/* Italic */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("italic") ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        Italic
      </button>

      {/* Underline */}
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("underline") ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        Underline
      </button>

      {/* Heading Level 1 */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("heading", { level: 1 })
            ? "bg-blue-100"
            : "bg-gray-100"
        }`}
      >
        H1
      </button>

      {/* Heading Level 2 */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("heading", { level: 2 })
            ? "bg-blue-100"
            : "bg-gray-100"
        }`}
      >
        H2
      </button>

      {/* Bullet List */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("bulletList") ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        • List
      </button>

      {/* Numbered List */}
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("orderedList") ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        1. List
      </button>

      {/* Clear formatting */}
      <button
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
        className="px-2 py-1 rounded bg-gray-100"
      >
        Clear
      </button>
    </div>
  );
}

export default function TipTapEditor({ content, setContent }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 2) Initialize TipTap
  const editor = useEditor({
    extensions: [StarterKit.configure({})],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg focus:outline-none min-h-[200px]",
      },
    },
    injectCSS: false, // Prevent SSR style issues
    autofocus: true, // Focus the editor automatically
    immediatelyRender: false, // Avoid SSR hydration mismatch
  });

  if (!mounted || !editor) {
    return <p className="text-gray-500">Loading editor...</p>;
  }

  // 3) Render the custom toolbar + editor content
  return (
    <div className="border border-gray-300 rounded-md p-3 max-h-[400px] overflow-y-auto">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
