import "./BodyInput.scss";
import "../sass/fonts.scss";

function BodyInput({ TitleInput, onChangeTitle, contentInput, onChangeInput }) {
  return (
    <div className="input font-ubuntu">
      <span className="input-label">Title: </span>
      <input
        className="input-text"
        type="text"
        value={TitleInput}
        onChange={onChangeTitle}
      />
      <span className="input-label">Content: </span>
      <textarea
        className="input-text"
        value={contentInput}
        onChange={onChangeInput}
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}

export default BodyInput;
