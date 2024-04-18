import "./HeaderSection.scss";
import "../sass/fonts.scss";
import { useState } from "react";
import HeaderContent from "./HeaderContent";

function HeaderSection({
  data,
  onTitleChange,
  onLinkChange,
  addNewSection,
  deleteSection,
}) {
  const [status, setStatus] = useState(false);

  function onClick() {
    setStatus(!status);
  }

  return (
    <div className="header font-ubuntu">
      <div className="header-section">
        <p className="header-text">Header Section</p>
        <button className="buttonEmpty buttonEmpty-arrow" onClick={onClick}>
          {status ? (
            <i className="bi bi-caret-up-fill"></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
        </button>
      </div>
      {status ? (
        <HeaderContent
          data={data}
          onTitleChange={onTitleChange}
          onLinkChange={onLinkChange}
          addNewSection={addNewSection}
          deleteSection={deleteSection}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default HeaderSection;
