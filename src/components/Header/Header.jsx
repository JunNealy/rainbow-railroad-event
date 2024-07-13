import logo from '../../assets/copu-dice-d20rainbow.png';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <a href="#about">
        <button className="header__button">About</button>
      </a>
      <a href="#events">
        <button className="header__button">Events</button>
      </a>
    </div>
  );
};

export default Header;
