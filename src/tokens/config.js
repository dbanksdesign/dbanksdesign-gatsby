module.exports = {
  source: [`${__dirname}/index.js`],
  platforms: {
    css: {
      transformGroup: 'scss',
      files: [{
        destination: 'test.css',
        format: 'css/variables'
      }]
    }
  }
}