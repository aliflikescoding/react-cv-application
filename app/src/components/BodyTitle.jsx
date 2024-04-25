import "./BodyTitle.scss";
import "../sass/fonts.scss";

function BodyTitle({ bodyTitle, onChangeBodyTitle }) {
  return (
    <div className="body-title input font-ubuntu">
      <span className="input-label">Title: </span>
      <input
        className="input-text"
        type="text"
        value={bodyTitle}
        onChange={onChangeBodyTitle}
      />
    </div>
  );
}

export default BodyTitle;
