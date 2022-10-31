import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listItems, setListItems] = useState([]);

  function addToList(e) {
    setListItems((prevItems) => [
      ...prevItems,
      { title: e.listTitle, content: e.listContent }
    ]);
  }
  function deleteItem(num) {
    setListItems((prevItems) =>
      prevItems.filter((item, index) => index !== num)
    );
  }
  return (
    <div>
      <Header />
      <CreateArea saveNotes={addToList} />
      {console.log(listItems)}
      {listItems.map((note, index) => (
        <Note
          getIndex={deleteItem}
          id={index}
          key={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
