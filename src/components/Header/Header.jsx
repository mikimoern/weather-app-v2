import Logo from '../../assets/logo.png';
import { Github } from "lucide-react";
import './Header.scss';
import Search from '../Search/Search';

const Header = ({ onSearchChange, resetSearch }) => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="" className="nav__logo">
          <img src={Logo} width="50" height="32" alt="logo" />
          <span>Weather App</span>
        </a>
        <Search onSearchChange={onSearchChange} resetSearch={resetSearch} />
        <div className="nav__switching">
          <a
            href="https://github.com/mikimoern/weather-app-v2"
            className="nav__save"
          >
            <Github />
            Github
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header