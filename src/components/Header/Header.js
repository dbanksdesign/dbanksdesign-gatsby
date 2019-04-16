import React, { Component } from 'react'
import headerStyles from './Header.module.css'
import Logo from '$components/Logo'
import { Link } from 'gatsby'
import { FaCloudSun, FaCloudMoon } from 'react-icons/fa'

// TODO: do this with graphQL or something?
const navItems = [{
  url: '/blog',
  label: 'Blog'
},{
  url: '/about',
  label: 'About'
},{
  url: '/projects',
  label: 'Projects'
},{
  url: '/work',
  label: 'Work'
},{
  url: '/speaking',
  label: 'Speaking'
}];

const NavItem = ({ url, label }) => (
  <Link to={url}
    activeClassName="active"
    className={headerStyles.navItem}>
    {label}
  </Link>
);

const themeMap = {
  dark: 'light',
  light: 'dark'
}

// const themeEmoji = {
//   dark: '☀️',
//   light: '🌚'
// }

const themeEmoji = {
  dark: <FaCloudSun />,
  light: <FaCloudMoon />
}

export default class Header extends Component {
  state = {
    theme: 'dark', // Dark mode by default yo.
    navOpen: false
  }

  toggleTheme = () => {
    const newTheme = themeMap[this.state.theme];
    document.body.className = newTheme;
    this.setState({
      theme: newTheme
    });
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    const className = this.state.navOpen ? headerStyles.open : '';
    return (
      <header className={`${headerStyles.header} ${className}`}>
        <nav className={`${headerStyles.navItems}`}>
          {navItems.map(navItem =>
            <NavItem {...navItem} key={navItem.url} />
          )}
        </nav>

        <button className={headerStyles.toggleButton}
          onClick={this.toggleNav}>
          <span className={headerStyles.toggleButtonBar} />
          <span className={headerStyles.toggleButtonBar} />
          <span className={headerStyles.toggleButtonBar} />
        </button>

        <Link to="/" className={headerStyles.logo}>
          <Logo />
        </Link>

        <button className={headerStyles.button}
          onClick={this.toggleTheme}>
          {themeEmoji[this.state.theme]}
        </button>
      </header>
    )
  }
}