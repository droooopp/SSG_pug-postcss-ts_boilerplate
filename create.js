const fs = require('fs')
const pug = require('pug')

const distPath = process.argv[3]
const jsonPath = './src/config/'
const baseDir = `${distPath}/SSG_pug-postcss-ts_boilerplate`
const config = JSON.parse(fs.readFileSync(`${jsonPath}/config.json`, 'utf8'))
const createData = JSON.parse(fs.readFileSync(`${jsonPath}/pages.json`, 'utf8'))

const create = ({pages, page, url, template}) => {
  const outputDestination = `${baseDir}/${url}`
  const splitDir = outputDestination.split('/')

  let createDir = `${baseDir}/`

  for (const dir of splitDir) {
    if (dir !== '.' && dir !== '..' && dir !== 'dist' && dir !== 'SSG_pug-postcss-ts_boilerplate') {
      createDir += `${dir}/`
    }

    if (!fs.existsSync(createDir)) {
      fs.mkdirSync(createDir)
    }
  }

  const options = {
    config,
    pages,
    page,
    pretty: true
  }

  const compiledFunction = pug.renderFile(`./src/templates/${template}/index.pug`, options)

  fs.writeFile(`${outputDestination}index.html`, compiledFunction, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`\u001b[33m ${outputDestination.replace('./dist/', 'https://www.staging.com/')}index.html \u001b[0m`)
    }
  })
}


for (page of createData.pages) {
  if (page.type === "home") {
    create({
      pages: createData.pages,
      page: page,
      url: page.dist,
      template: 'home'
    })
  }
  if (page.type === "article") {
    create({
      pages: createData.pages,
      page: page,
      url: page.dist,
      template: 'article'
    })
  }
}
