import "./Name.scss";
import "../sass/fonts.scss";

function Name({ data, onChangeFunction }) {

  return (
    <div className="input font-ubuntu">
      <span className="input-label">Name: </span>
      <input
        className="input-text"
        type="text"
        value={data.name}
         onChange={onChangeFunction}
      />
    </div>
  );
}

export default Name;
