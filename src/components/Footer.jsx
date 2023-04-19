import "./Footer.css";
import logo from "../media/ntnu_uten_slagord.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="NTNU" />
      <p>
        This page was created for{" "}
        <abbr title="Norwegian University of Science and Technology">NTNU</abbr>{" "}
        Gjøvik's webdevelopment course "IDG2671 Webproject"
      </p>
    </div>
  );
}

export default Footer;
