function CvPaper({ data }) {
  const headerSection = data.headerSection;
  const bodySection = data.bodySection;

  return (
    <div className="cv-paper">
      <div className="cv-paper-header">
        <h1 className="cv-paper-header-title">{data.name}</h1>
        <div className="cv-paper-header-links`">
          {Object.keys(headerSection).map((key) => {
            const section = headerSection[key];
            return (
              <p key={section.id}>
                {section.headerLink != "" ? (
                  <a target="_" href={section.headerLink}>{section.headerTitle}</a>
                ) : (
                  section.headerTitle
                )}
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
                    <div
                      className="cv-paper-body-section-points"
                      key={points.pointId}
                    >
                      <p>
                        <span>{points.pointTitle}</span> - {points.pointContent}
                      </p>
                    </div>
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
