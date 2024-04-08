import "./HeaderInput.scss";
import "../sass/fonts.scss";

function HeaderInput({ TitleInput, onChangeTitle, linkInput, onChangeLink }) {
  return (
    <div className="input font-ubuntu">
      <span className="input-label">Title: </span>
      <input
        className="input-text"
        type="text"
        value={TitleInput}
        onChange={onChangeTitle}
      />
      <span className="input-label">Link: </span>
      <input
        className="input-text"
        type="text"
        value={linkInput}
        onChange={onChangeLink}
      />
    </div>
  );
}

export default HeaderInput;
