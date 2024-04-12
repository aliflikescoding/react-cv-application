import "./BodyContent.scss";
import "../sass/fonts.scss";
import "./BodyInput";
import BodyInput from "./BodyInput";
import BodyTitle from "./BodyTitle";

function BodyContent({
  data,
  onBodyTitleChange,
  onPointTitleChange,
  onPointInputChange,
  addSectionBody,
  addPointSection,
  onDeleteBodySection,
  onDeletePoint
}) {
  const bodySection = data.bodySection;

  return (
    <div className="body-content">
      {Object.keys(bodySection).map((key) => {
        const section = bodySection[key];
        return (
          <div key={section.bodyId}>
            <BodyTitle
              bodyTitle={section.bodyTitle}
              onChangeBodyTitle={(event) => {
                onBodyTitleChange(key, event.target.value);
              }}
            />
            {Object.keys(section.bodyPoints).map((pointKey) => {
              const points = section.bodyPoints[pointKey];
              return (
                <div key={points.pointId}>
                  <BodyInput
                    TitleInput={points.pointTitle}
                    onChangeTitle={(event) => {
                      onPointTitleChange(key, pointKey, event.target.value);
                    }}
                    contentPoint={points.pointContent}
                    onChangePoint={(event) => {
                      onPointInputChange(key, pointKey, event.target.value);
                    }}
                  />
                  <button onClick={() => onDeletePoint(key, pointKey)}>Delete Point</button>
                </div>
              );
            })}
            <button onClick={() => addPointSection(key)}>+ Add Point</button>
            <button onClick={() => onDeleteBodySection(key)}>Delete Section</button>
          </div>
        );
      })}
      <button onClick={addSectionBody}>+ Add Section</button>
    </div>
  );
}

export default BodyContent;
