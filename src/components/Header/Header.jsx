import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <a className="header__link" href="#about">
        <button className="header__link-button">About</button>
      </a>
      <a className="header__link" href="#events">
        <button className="header__link-button">Events</button>
      </a>
    </div>
  );
};

export default Header;
