// const { exec } = require('child_process');
const util = require('node:util')
const exec = util.promisify(require('node:child_process').exec)

const generateFiles = require('./langs/translationsGenerator.js')

;(async () => {
  try {
    console.info('> build locales')
    await generateFiles()
  } catch (err) {
    console.error(err)
    process.exit()
  }

  console.info('> build nuxt')
  const { stdout, stderr } = await exec('nuxt build')
  console.log('stdout:', stdout)
  console.error('stderr:', stderr)
})()
