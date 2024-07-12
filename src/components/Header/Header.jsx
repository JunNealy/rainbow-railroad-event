import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src="" alt="" />
      <nav className="header__nav">
        <p>---</p>
        <ul className="header__nav-list">
          <li className="header__nav-list-item">About</li>
          <li className="header__nav-list-item">Events</li>
        </ul>
      </nav>
      <button>Sign Up</button>
    </div>
  );
};

export default Header;
