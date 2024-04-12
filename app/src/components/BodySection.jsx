import "./HeaderInput.scss";
import "../sass/fonts.scss";
import { useState } from "react";
import BodyContent from "./BodyContent";

function BodySection({
  data,
  onBodyTitleChange,
  onPointTitleChange,
  onPointInputChange,
  addSectionBody
}) {
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
      {status ? (
        <BodyContent
          data={data}
          onBodyTitleChange={onBodyTitleChange}
          onPointTitleChange={onPointTitleChange}
          onPointInputChange={onPointInputChange}
          addSectionBody={addSectionBody}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default BodySection;
