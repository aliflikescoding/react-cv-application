import "./HeaderInput.scss";
import "../sass/fonts.scss";
import { useState } from "react";
import HeaderContent from "./HeaderContent";

function HeaderSection({ data, onTitleChange, onLinkChange, addNewSection, deleteSection }) {
  const [status, setStatus] = useState(false);

  function onClick() {
    setStatus(!status);
  }

  return (
    <div className="input font-ubuntu">
      <div className="header-section">
        <p>Header Section</p>
        <button onClick={onClick}>{status ? 'open' : 'closed'}</button>
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
        ''
      )}
    </div>
  );
}

export default HeaderSection;
