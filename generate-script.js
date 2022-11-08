const { execSync } = require('child_process')

const generateFiles = require('./langs/translationsGenerator.js')

;(async () => {
  try {
    console.info('> build locales')
    await generateFiles()
  } catch (err) {
    console.error(err)
    process.exit()
  }

  execSync('nuxt generate')
})()
