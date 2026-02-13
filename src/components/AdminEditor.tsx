'use client';

import { useEffect, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function AdminEditor({ value, onChange }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor(
    {
      extensions: [StarterKit, Underline, Link],
      content: value,
      immediatelyRender: false,
      onUpdate: ({ editor }) => {
        onChange(editor.getHTML());
      },
      editorProps: {
        attributes: {
          class:
            'min-h-[200px] px-4 py-3 outline-none',
        },
      },
    },
    [isMounted]
  );

  if (!isMounted || !editor) return null;

  return (
    <div className="border rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
      
      {/* Toolbar */}
      <div className="flex gap-3 flex-wrap p-3 border-b bg-white rounded-t-xl">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>
          <b>B</b>
        </button>

        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>
          <i>I</i>
        </button>

        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <u>U</u>
        </button>

      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
