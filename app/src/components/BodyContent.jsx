import "./BodyContent.scss";
import "../sass/fonts.scss";
import "./BodyInput";
import BodyInput from "./BodyInput";
import BodyTitle from "./BodyTitle";

function BodyContent({ data, onBodyTitleChange, onPointTitleChange, onPointInputChange }) {
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
                <BodyInput
                  key={points.pointId}
                  TitleInput={points.pointTitle}
                  onChangeTitle={(event) => {
                    onPointTitleChange(key, pointKey, event.target.value);
                  }}
                  contentPoint={points.pointContent}
                  onChangePoint={(event) => {
                    onPointInputChange(key, pointKey, event.target.value);
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default BodyContent;