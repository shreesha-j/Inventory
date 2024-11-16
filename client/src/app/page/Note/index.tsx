import React from 'react';
import NoteLayout from '../../(components)/NoteLayout';

const Note = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Note Page</h2>
      <p>This is a page with its own unique layout.</p>
    </div>
  );
};

// Use the custom layout for this page
Note.getLayout = function getLayout(page: React.ReactNode) {
  return <NoteLayout>{page}</NoteLayout>;
};

export default Note;
