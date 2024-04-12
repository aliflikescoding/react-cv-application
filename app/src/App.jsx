import "./App.scss";
import initialUserInfo from "./data";
import { useState } from "react";
// import BodyContent from "./components/BodyContent";
import HeaderSection from "./components/HeaderSection";
import BodySection from "./components/BodySection";
import Name from "./components/Name";

function App() {
  const [newData, setNewData] = useState(initialUserInfo);
  const [localKey, setLocalKey] = useState(3);

  function onClickNameChange(value) {
    setNewData({
      ...newData,
      name: value,
    });
  }

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
      headerSection: Object.keys(newData.headerSection)
        .filter((k) => k !== key)
        .reduce((obj, k) => {
          obj[k] = newData.headerSection[k];
          return obj;
        }, {}),
    });
  }

  return (
    <>
      <h1>hello</h1>
      <Name
        data={newData}
        onChangeFunction={(event) => {
          onClickNameChange(event.target.value);
        }}
      />
      <HeaderSection
        data={newData}
        onTitleChange={onTitleChange}
        onLinkChange={onLinkChange}
        addNewSection={addNewSection}
        deleteSection={deleteSection}
      />
      <BodySection data={newData} />
    </>
  );
}

export default App;
