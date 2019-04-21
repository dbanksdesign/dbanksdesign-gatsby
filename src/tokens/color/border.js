const opacity = [
  0.4,
  0.2,
  0.1,
];

module.exports = {
  light: {
    primary: { value: `rgba(0, 6, 38, ${opacity[0]})` },
    secondary: { value: `rgba(0, 6, 38, ${opacity[1]})` },
    tertiary: { value: `rgba(0, 6, 38, ${opacity[2]})` },
  },
  dark: {
    primary: { value: `rgba(255, 255, 255, ${opacity[0]})` },
    secondary: { value: `rgba(255, 255, 255, ${opacity[1]})` },
    tertiary: { value: `rgba(255, 255, 255, ${opacity[2]})` },
  }
}