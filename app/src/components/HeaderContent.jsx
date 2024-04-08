import "./HeaderContent.scss";
import "../sass/fonts.scss";
import "./HeaderInput";
import HeaderInput from "./HeaderInput";
import { useState } from "react";

function HeaderContent({ data }) {
  const [newData, setNewData] = useState(data);
  const [localKey, setLocalKey] = useState(3);
  const headerSection = newData.headerSection;

  function onTitleChange(key, value) {
    setNewData({
      ...newData,
      headerSection: {
        ...newData.headerSection,
        [key]: {
          ...newData.headerSection[key],
          headerTitle: value,
        },
      },
    });
  }

  function onLinkChange(key, value) {
    setNewData({
      ...newData,
      headerSection: {
        ...newData.headerSection,
        [key]: {
          ...newData.headerSection[key],
          headerLink: value,
        },
      },
    });
  }

  function addNewSection() {
    setNewData({
      ...newData,
      headerSection: {
        ...newData.headerSection,
        [localKey]: {
          headerId: localKey,
          headerTitle: "",
          headerLink: "",
        },
      },
    });
    setLocalKey(localKey + 1);
  }

  function deleteSection(key) {
    setNewData({
      ...newData,
      headerSection: Object.keys(headerSection)
        .filter((k) => k !== key)
        .reduce((obj, k) => {
          obj[k] = headerSection[k];
          return obj;
        }, {}),
    });
  }

  return (
    <div className="header-content">
      {Object.keys(headerSection).map((key) => {
        const section = headerSection[key];
        return (
          <HeaderInput
            key={section.id}
            TitleInput={section.headerTitle}
            onChangeTitle={(event) => {
              onTitleChange(key, event.target.value);
            }}
            linkInput={section.headerLink}
            onChangeLink={(event) => {
              onLinkChange(key, event.target.value);
            }}
            onDeleteSection={() => deleteSection(key)}
          />
        );
      })}
      <button onClick={addNewSection}>+ Add Section</button>
    </div>
  );
}

export default HeaderContent;