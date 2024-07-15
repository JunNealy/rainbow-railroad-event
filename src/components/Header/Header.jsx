import './Header.scss';
import headerLogo from '../../assets/RRLogo_Horizontal_RevFullColour.png';

const Header = () => {
  return (
    <div className="header">
      <nav className="header__links">
        <a className="header__links-link" href="#about">
          <button className="header__links-link-button">About</button>
        </a>
        <a className="header__links-link" href="#events">
          <button className="header__links-link-button">Events</button>
        </a>
      </nav>
    </div>
  );
};

export default Header;
