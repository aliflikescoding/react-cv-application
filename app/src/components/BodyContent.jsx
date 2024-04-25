import "./BodyContent.scss";
import "../sass/fonts.scss";
import "../sass/components.scss";
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
  onDeletePoint,
}) {
  const bodySection = data.bodySection;

  return (
    <div className="body-content">
      {Object.keys(bodySection).map((key) => {
        const section = bodySection[key];
        return (
          <div className="body-part" key={section.bodyId}>
            <BodyTitle
              bodyTitle={section.bodyTitle}
              onChangeBodyTitle={(event) => {
                onBodyTitleChange(key, event.target.value);
              }}
            />
            {Object.keys(section.bodyPoints).map((pointKey) => {
              const points = section.bodyPoints[pointKey];
              return (
                <div className="body-card" key={points.pointId}>
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
                  <button
                    className="body-delete-button buttonEmpty buttonEmpty-cross"
                    onClick={() => onDeletePoint(key, pointKey)}
                  >
                    X
                  </button>
                </div>
              );
            })}
            <button
              className="button button-primary button-medium"
              onClick={() => addPointSection(key)}
            >
              + Add Point
            </button>
            <button
              className="body-delete-button buttonEmpty buttonEmpty-cross"
              onClick={() => onDeleteBodySection(key)}
            >
              X
            </button>
          </div>
        );
      })}
      <button
        className="button button-primary button-medium"
        onClick={addSectionBody}
      >
        + Add Section
      </button>
    </div>
  );
}

export default BodyContent;
