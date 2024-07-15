import './Footer.scss';
import RRLogo from '../../assets/RRLogo_Horizontal_RevFullColour.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__partnership">
        <p className="footer__partnership-text">In partnership with:</p>
        <a href="https://www.rainbowrailroad.org/">
          <img
            className="footer__partnership-logo"
            src={RRLogo}
            alt="Rainbow Railroad Logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
