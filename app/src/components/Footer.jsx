import "./Footer.scss";
import "../sass/fonts.scss";

function Footer() {
  return (
    <div className="appFooter font-ubuntu">
      <h1 className="appFooter-logo">
        <a href="http://github.com/aliflikescoding" target="_">
          AlifLikesCoding <i className="bi bi-github"></i>
        </a>
      </h1>
    </div>
  );
}

export default Footer;
