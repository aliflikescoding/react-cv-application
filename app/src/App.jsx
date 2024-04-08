import "./App.scss";
import BodyInput from "./components/BodyInput";
import { useState } from "react";

function App() {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setcontentValue] = useState("");

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleLinkChange = (e) => {
    setcontentValue(e.target.value);
  };

  return (
    <>
      <BodyInput
        TitleInput={titleValue}
        onChangeTitle={handleTitleChange}
        contentInput={contentValue}
        onChangeInput={handleLinkChange}
      />

      <h1>this is title: {titleValue}</h1>
      <h1>this is link: {contentValue}</h1>
    </>
  );
}

export default App;
