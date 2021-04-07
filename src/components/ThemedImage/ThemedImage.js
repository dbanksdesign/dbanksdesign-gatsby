import React, { useContext } from 'react';
import ThemeContext from '$components/ThemeContext';

const ThemedImage = ({ children, width=100, style={} }) => {
  const theme = useContext(ThemeContext);
  let darkElem, lightElem;

  // This assumes it's children is markdown with 2 images (from gatsby remark)
  // based on the theme we will either show the light or dark image by cloning
  // the react element that the MDX gives us for the image (which uses gatsby image stuff)
  children.props.children
    .filter(child => child.props)
    .forEach(child => {
      const element = child.props.children
        .find(el => el.props && el.props.className === 'gatsby-resp-image-wrapper')
        .props.children
        .find(el => el.props && el.props.href);
      console.log(element);
      // console.log(child);
      // by convention if it has 'dark' in the path it is the dark mode image
      if (element.props.href.indexOf('dark') > -1) {
        darkElem = child;
      } else {
        lightElem = child;
      }
    });
  
  
  return (
    <div style={style}>
      {theme === 'dark' ? React.cloneElement(darkElem) : React.cloneElement(lightElem)}
    </div>
  )
}

export default ThemedImage;