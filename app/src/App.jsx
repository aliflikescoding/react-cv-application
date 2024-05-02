import "./App.scss";
import initialUserInfo from "./data";
import { useState } from "react";
import HeaderSection from "./components/HeaderSection";
import BodySection from "./components/BodySection";
import Name from "./components/Name";
import CvPaper from "./components/CvPaper";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [newData, setNewData] = useState(initialUserInfo);
  const [localKey, setLocalKey] = useState(3);
  const [bodyKey, setBodyKey] = useState(2);
  const [localPointKey, setLocalPointKey] = useState(5);

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

  function deleteBodySection(key) {
    const updatedBodySection = { ...newData.bodySection };
    delete updatedBodySection[key];
    setNewData({
      ...newData,
      bodySection: updatedBodySection,
    });
  }

  function onBodyTitleChange(key, value) {
    setNewData({
      ...newData,
      bodySection: {
        ...newData.bodySection,
        [key]: {
          ...newData.bodySection[key],
          bodyTitle: value,
        },
      },
    });
  }

  function onPointTitleChange(key, pointKey, value) {
    setNewData({
      ...newData,
      bodySection: {
        ...newData.bodySection,
        [key]: {
          ...newData.bodySection[key],
          bodyPoints: {
            ...newData.bodySection[key].bodyPoints,
            [pointKey]: {
              ...newData.bodySection[key].bodyPoints[pointKey],
              pointTitle: value,
            },
          },
        },
      },
    });
  }

  function onPointInputChange(key, pointKey, value) {
    setNewData({
      ...newData,
      bodySection: {
        ...newData.bodySection,
        [key]: {
          ...newData.bodySection[key],
          bodyPoints: {
            ...newData.bodySection[key].bodyPoints,
            [pointKey]: {
              ...newData.bodySection[key].bodyPoints[pointKey],
              pointContent: value,
            },
          },
        },
      },
    });
  }

  function addNewPoint(sectionKey) {
    setNewData({
      ...newData,
      bodySection: {
        ...newData.bodySection,
        [sectionKey]: {
          ...newData.bodySection[sectionKey],
          bodyPoints: {
            ...newData.bodySection[sectionKey].bodyPoints,
            [localPointKey]: {
              pointId: localPointKey,
              pointTitle: "",
              pointContent: "",
            },
          },
        },
      },
    });
    setLocalPointKey(localPointKey + 1);
  }

  function addBodyNewSection() {
    setNewData({
      ...newData,
      bodySection: {
        ...newData.bodySection,
        [bodyKey]: {
          bodyId: bodyKey,
          bodyTitle: "",
          bodyPoints: {
            0: {
              pointId: 0,
              pointTitle: "",
              pointContent: "",
            },
          },
        },
      },
    });
    setBodyKey(bodyKey + 1);
  }

  function deletePoint(sectionKey, pointKey) {
    setNewData({
      ...newData,
      bodySection: {
        ...newData.bodySection,
        [sectionKey]: {
          ...newData.bodySection[sectionKey],
          bodyPoints: Object.keys(newData.bodySection[sectionKey].bodyPoints)
            .filter((k) => k !== pointKey)
            .reduce((obj, k) => {
              obj[k] = newData.bodySection[sectionKey].bodyPoints[k];
              return obj;
            }, {}),
        },
      },
    });
  }

  return (
    <>
      <Header />
      <div className="container font-ubuntu">
        <div className="side-area">
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
          <BodySection
            data={newData}
            onBodyTitleChange={onBodyTitleChange}
            onPointTitleChange={onPointTitleChange}
            onPointInputChange={onPointInputChange}
            addSectionBody={addBodyNewSection}
            addPointSection={addNewPoint}
            onDeleteBodySection={deleteBodySection}
            onDeletePoint={deletePoint}
          />
        </div>
        <CvPaper data={newData} />
      </div>
      <Footer />
    </>
  );
}

export default App;
