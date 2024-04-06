import "./App.scss";
import Name from "./components/Name";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Name valueInput={value} onChangeFunction={handleChange} />
      <Name valueInput={value} onChangeFunction={handleChange} />
      <h1>this is the input text: {value}</h1>
    </>
  );
}

export default App;
