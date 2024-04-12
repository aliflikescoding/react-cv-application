import "./HeaderInput.scss";
import "../sass/fonts.scss";
import { useState } from "react";
import BodyContent from "./BodyContent";

function BodySection({ data }) {
  const [status, setStatus] = useState(false);

  function onClick() {
    setStatus(!status);
  }

  return (
    <div className="input font-ubuntu">
      <div className="header-section">
        <p>Body Section</p>
        <button onClick={onClick}>{status ? "open" : "closed"}</button>
      </div>
      {status ? <BodyContent data={data} /> : ""}
    </div>
  );
}
export default BodySection;
