import "./BodySection.scss";
import "../sass/fonts.scss";
import { useState } from "react";
import BodyContent from "./BodyContent";

function BodySection({
  data,
  onBodyTitleChange,
  onPointTitleChange,
  onPointInputChange,
  addSectionBody,
  addPointSection,
  onDeleteBodySection,
  onDeletePoint,
}) {
  const [status, setStatus] = useState(false);

  function onClick() {
    setStatus(!status);
  }

  function handleDeleteBodySection(key) {
    onDeleteBodySection(key);
  }

  return (
    <div className="bodySection bodySection-component font-ubuntu">
      <div className="bodySection-section">
        <p className="bodySection-text">Body Section</p>
        <button
          className="bodySection-button buttonEmpty buttonEmpty-arrow"
          onClick={onClick}
        >
          {status ? (
            <i className="bi bi-caret-up-fill"></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
        </button>
      </div>
      {status ? (
        <BodyContent
          data={data}
          onBodyTitleChange={onBodyTitleChange}
          onPointTitleChange={onPointTitleChange}
          onPointInputChange={onPointInputChange}
          addSectionBody={addSectionBody}
          addPointSection={addPointSection}
          onDeleteBodySection={handleDeleteBodySection}
          onDeletePoint={onDeletePoint}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default BodySection;
