import "./Name.scss";
import "../sass/fonts.scss";

function Name({ data, onChangeFunction }) {
  return (
    <div className="name-component">
      <span className="name-label">Name </span>
      <input
        className="name-input"
        type="text"
        value={data.name}
        onChange={onChangeFunction}
        placeholder="John Doe"
      />
    </div>
  );
}

export default Name;
