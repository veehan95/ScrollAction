const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const tempjs = fs.readFileSync('build/index.js', 'utf8')
  .split(/\n/)
  .map((line) => {
    if (/^import/i.test(line) && /\.\//i.test(line)) {
      const fileName = line.match(/['|"]\.\/(.*)['|"]/)[1];
      line = fs.readFileSync(`build/${fileName}.js`, 'utf8')
        .replace('export ', '');
    }

    line = /^import/i.test(line) ? '' : line
    return line = /^export/i.test(line) ? line.replace('export ', '') : line
  })
  .join('\n')

// fs.writeFile('./example/temp.js', tempjs.replace(/\s\s+/g, ''), (err) => {
fs.writeFile('./example/temp.js', tempjs, (err) => {
    if (err) throw err;
    console.log("The file was succesfully saved!");
})

app.get('/', function (req, res) { res.sendFile(path.resolve('example/index.html')) })
app.get('/index.js', function (req, res) { res.sendFile(path.resolve('example/index.execute.js')) })
app.get('/lib.js', function (req, res) {
  res.sendFile(path.resolve('example/temp.js'))
})

app.listen(3000, () => { console.log('listening to 3030') })
