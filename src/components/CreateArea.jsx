import React, { useState } from "react";
function CreateArea(props) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  function change(event) {
    event.target.name === "title"
      ? setTitle(event.target.value)
      : setContent(event.target.value);
  }
  function create(e) {
    e.preventDefault();
    setTitle("");
    setContent("");
    props.saveNotes({ listTitle: title, listContent: content });
  }
  return (
    <div>
      <form>
        <input
          onChange={change}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={change}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={create}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
