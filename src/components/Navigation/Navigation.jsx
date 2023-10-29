import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

let activeClassName = {
  color: '#2196f3',
};

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={s.link}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={s.link}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
