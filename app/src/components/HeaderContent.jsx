import "./HeaderContent.scss";
import "../sass/fonts.scss";
import "./HeaderInput";
import HeaderInput from "./HeaderInput";

function HeaderContent({ data, onTitleChange, onLinkChange, addNewSection, deleteSection }) {
  const headerSection = data.headerSection;

  return (
    <div className="header-content">
      {Object.keys(headerSection).map((key) => {
        const section = headerSection[key];
        return (
          <HeaderInput
            key={section.id}
            TitleInput={section.headerTitle}
            onChangeTitle={(event) => {
              onTitleChange(key, event.target.value);
            }}
            linkInput={section.headerLink}
            onChangeLink={(event) => {
              onLinkChange(key, event.target.value);
            }}
            onDeleteSection={() => deleteSection(key)}
          />
        );
      })}
      <button onClick={addNewSection}>+ Add Section</button>
    </div>
  );
}

export default HeaderContent;