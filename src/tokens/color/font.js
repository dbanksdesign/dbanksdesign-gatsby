const core = require('./core');

const opacity = [
  0.9,
  0.8,
  0.6,
]

module.exports = {
  light: {
    primary: { value: `rgba(0, 6, 38, ${opacity[0]})`},
    secondary: { value: `rgba(0, 6, 38, ${opacity[1]})`},
    tertiary: { value: `rgba(0, 6, 38, ${opacity[2]})`},
    inverse: { value: `rgba(255, 255, 255, ${opacity[0]})`},
    code: {
      1: { value: "{color.core.blue.dark.value}" },
      2: { value: "{color.core.green.dark.value}" },
      3: { value: "{color.core.purple.dark.value}" },
      4: { value: "{color.core.red.dark.value}" },
      5: { value: "{color.core.orange.dark.value}" },
    }
  },
  dark: {
    primary: { value: `rgba(255, 255, 255, ${opacity[0]})`},
    secondary: { value: `rgba(255, 255, 255, ${opacity[1]})`},
    tertiary: { value: `rgba(255, 255, 255, ${opacity[2]})`},
    inverse: { value: `rgba(0, 6, 38, ${opacity[0]})`},
    code: {
      1: { value: "{color.core.blue.base.value}" },
      2: { value: "{color.core.green.base.value}" },
      3: { value: "{color.core.purple.base.value}" },
      4: { value: "{color.core.red.base.value}" },
      5: { value: "{color.core.orange.base.value}" },
    }
  }
}