import "./App.scss";
import HeaderInput from "./components/HeaderInput";
import { useState } from "react";

function App() {
  const [titleValue, setTitleValue] = useState("");
  const [linkValue, setLinkValue] = useState("");

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLinkValue(e.target.value);
  };

  return (
    <>
      < HeaderInput TitleInput={titleValue} onChangeTitle={handleTitleChange} linkInput={linkValue} onChangeLink={handleLinkChange}/>

      <h1>this is title: {titleValue}</h1>
      <h1>this is link: {linkValue}</h1>
    </>
  );
}

export default App;
