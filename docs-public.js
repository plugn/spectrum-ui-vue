const shell = require('shelljs')

shell.cd(__dirname)
shell.echo(' * ' + __filename + ' @' + shell.pwd())

// preparing `public` dir with git-ignored `public/spectrum-css` folder
// this approach enables HMR development with required CSS and SVG resources
const PUBLIC_DIR = './public'
const SPECTRUM_FOLDER = PUBLIC_DIR + '/spectrum-css'
const NPM_SPECTRUM_DIST = './node_modules/@spectrum-css/spectrum-css/dist'
const NPM_WF_ICONS_DIST = './node_modules/@adobe/spectrum-css-workflow-icons/dist'

shell.rm('-rf', SPECTRUM_FOLDER)
shell.mkdir('-p', SPECTRUM_FOLDER)
shell.cp(`${NPM_SPECTRUM_DIST}/icons/spectrum-css-icons.svg`, SPECTRUM_FOLDER)
shell.cp(`${NPM_SPECTRUM_DIST}/icons/spectrum-icons.svg`, SPECTRUM_FOLDER)
shell.cp(`./node_modules/loadicons/index.js`, SPECTRUM_FOLDER + '/loadicons.js')
shell.cp(`${NPM_WF_ICONS_DIST}/spectrum-icons.svg`, SPECTRUM_FOLDER)
shell.cp(`${NPM_WF_ICONS_DIST}/icons.json`, SPECTRUM_FOLDER + '/spectrum-icons.json')
shell.cp('-r', `${NPM_SPECTRUM_DIST}/standalone`, SPECTRUM_FOLDER)

const coreFiles = ['spectrum-core.css', 'spectrum-core-diff.css', 'spectrum-core-lg.css']
coreFiles.forEach(coreFile => {
  shell.cp(`${NPM_SPECTRUM_DIST}/${coreFile}`, SPECTRUM_FOLDER)
})

// shell.echo(' * public folder ready')
