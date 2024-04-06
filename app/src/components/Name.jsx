import "./Name.scss";
import "../sass/fonts.scss";

function Name({ valueInput, onChangeFunction }) {
  return (
    <div className="input font-ubuntu">
      <span className="input-label">Name: </span>
      <input
        className="input-text"
        type="text"
        value={valueInput}
        onChange={onChangeFunction}
      />
    </div>
  );
}

export default Name;
