import "./CvPaper.scss";
import "../sass/fonts.scss";

function CvPaper({ data }) {
  const headerSection = data.headerSection;
  const bodySection = data.bodySection;

  return (
    <div className="cv-paper font-times-new-roman">
      <div className="cv-paper-header">
        <h1 className="cv-paper-header-title">{data.name}</h1>
        <div className="cv-paper-header-links">
          {Object.keys(headerSection).map((key, index) => {
            const section = headerSection[key];
            const isLastElement =
              index === Object.keys(headerSection).length - 1;
            return (
              <p key={section.id}>
                {section.headerLink !== "" ? (
                  <a target="_" href={section.headerLink}>
                    {section.headerTitle}
                  </a>
                ) : (
                  section.headerTitle
                )}
                {!isLastElement && <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
              </p>
            );
          })}
        </div>
        <div className="cv-paper-body">
          {Object.keys(bodySection).map((key) => {
            const section = bodySection[key];
            return (
              <div className="cv-paper-body-section" key={section.bodyId}>
                <h2 className="cv-paper-body-section-title">
                  {section.bodyTitle}
                </h2>
                {Object.keys(section.bodyPoints).map((pointKey) => {
                  const points = section.bodyPoints[pointKey];
                  return (
                    <ul
                      className="cv-paper-body-section-points"
                      key={points.pointId}
                    >
                      <li>
                        <span>{points.pointTitle}</span> - {points.pointContent}
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CvPaper;
