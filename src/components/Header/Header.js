import React, { Component } from 'react'
import Logo from '$components/Logo'
import { Link } from 'gatsby'
import { FiSun, FiMoon } from 'react-icons/fi'
import './Header.css'

// TODO: do this with graphQL or something?
const navItems = [{
  url: '/blog/',
  label: 'Blog'
},{
  url: '/about/',
  label: 'About'
},{
  url: '/projects/',
  label: 'Projects'
},{
  url: '/work/',
  label: 'Work'
},{
  url: '/speaking/',
  label: 'Speaking'
}];

const NavItem = ({ url, label }) => (
  <Link to={url}
    activeClassName="active"
    partiallyActive={true}
    className="nav-item">
    {label}
  </Link>
);

const themeMap = {
  dark: 'light',
  light: 'dark'
}

const themeEmoji = {
  dark: <FiSun />,
  light: <FiMoon />
}

export default class Header extends Component {
  state = {
    theme: 'dark', // Dark mode by default yo.
    navOpen: false
  }

  toggleTheme = () => {
    const theme = this.props.theme === 'dark' ? 'light' : 'dark';
    window.__setPreferredTheme( theme );
    // document.body.className = newTheme;
    // this.props.setTheme({theme});
    // this.setState({
    //   theme: newTheme
    // });
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    const className = this.state.navOpen ? 'open' : '';
    return (
      <header className={`header ${className}`}>
        <div className="header-inner">
        <nav className="nav-items">
          {navItems.map(navItem =>
            <NavItem {...navItem} key={navItem.url} />
          )}
        </nav>

        <button className="nav-toggle-button"
          aria-hidden={true}
          onClick={this.toggleNav}>
          <span className="nav-toggle-button-bar" />
          <span className="nav-toggle-button-bar" />
          <span className="nav-toggle-button-bar" />
        </button>

        <Link to="/" className="logo" aria-label="home">
          <Logo />
        </Link>

        <button className="theme-toggle-button"
          aria-hidden={true}
          onClick={this.toggleTheme}>
          {themeEmoji[this.props.theme]}
        </button>
        </div>
      </header>
    )
  }
}