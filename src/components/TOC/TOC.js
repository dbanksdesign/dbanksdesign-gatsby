import React from 'react'
import smoothScroll from './smoothScroll'
import './TOC.css'

class Scrollsy extends React.Component {
  state = {
    index: 0
  }
  
  componentDidMount() {
    this.offsets = this.props.items.map((link) => {
      const anchor = document.getElementById(link.anchor);
      if (anchor) {
        return anchor.offsetTop;
      }
    });

    window.addEventListener('scroll', this.scroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }
  
  scroll = (e) => {
    const bodyScroll = e.target.documentElement.scrollTop;
    let index = 0;
    
    while (index <= this.offsets.length - 2) {
      if (bodyScroll < this.offsets[index+1] - 100) {
        break;
      }
      index++;
    }
    
    // Don't cause unnecessary re-renders
    if (this.state.index !== index) {
      this.setState({ index });
    }
  }
  
  render() {
    return (
      <nav>
        {this.props.items.map((item, i) => {
          let className = 'toc-link '
          className += i === this.state.index ? 'is-current' : '';
          return (
            <a key={item.label}
              className={className}
              href={`#${item.anchor}`}
              onClick={(e) => {
                smoothScroll.scrollTo(item.anchor);
                e.preventDefault();
                document.location.hash = `#${item.anchor}`;
              }}>
                {item.label}
            </a>
          )
        })}
      </nav>
    )
  }
}

export default ({ links }) => (
  <div className="toc">
    <div className="toc-inner">
      <h4>Table of contents</h4>
      <Scrollsy items={links} />
    </div>
  </div>
)
