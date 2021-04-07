import React from 'react'
import Header from '$components/Header'
import Footer from '$components/Footer'
import ThemeContext from '$components/ThemeContext'
import './Layout.css'

class Layout extends React.Component {
  state = {
    theme: null
  }
  
  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }
  
  setTheme = (theme) => {
    this.setState({
      theme
    });
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="app">
          <Header theme={theme} setTheme={this.setTheme} />
          <div className="content">
            {children}
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default Layout
