let fs = require('fs');
let pathUtil = require('path');
let less = require('less');
let filePath = pathUtil.join(__dirname, 'src', 'temp_app');

let fileArray = [];

function fildFile(path) {
  if (fs.statSync(path).isFile()) {
    if (/\.component.ts/.test(path)) {
      fileArray[0] = path;
    }
    if (/\.html$/.test(path)) {
      fileArray[1] = readFile(path)
    }
    if (/\.component.less/.test(path)) {
      fileArray[2] = path;
    }
  } else if (fs.statSync(path).isDirectory()) {
    let paths = fs.readdirSync(path);

    if (fileArray.length === 3) {
      writeFile(fileArray);
      fileArray = [];
    }
    paths.forEach((p) => {
      fildFile(pathUtil.join(path, p));
    });
  }

}

function readFile(file) {
  return fs.readFileSync(file);
}

function writeFile(fileArray) {
  let file = fileArray[0];
  let content = fileArray[1];
  let scssPath = fileArray[2];
  mergeContent(file, content, scssPath)
    .then(result => {
      if (!result) return;
      fs.writeFile(file, result, function (err) {
        if (err) console.error(err);
        console.log('file merge success!');
      })
    });

}

/**
 * 转换scss
 * @param path
 * @returns {Promise}
 */
function processScss(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw err
      }
      less.render(data, {
        filename: pathUtil.resolve(path),
      }, (err, result) => {
        fs.writeFile(path, result.css, function (err) {
          if (err) console.error(err);
          console.log('file merge success!');
        })
        if (!err) {
          resolve(result.css.toString())
        } else {
          reject(err);
        }
      })
    });
  })
}

function mergeContent(file, content, scssPath) {
  let componentContent = readFile(file);
  let htmlRegex = /(templateUrl *:\s*[\"|\'])(.*[\"|\']\,?)/g;
  let scssRegex = /(styleUrls *:\s*)(\[.*\]\,?)/g;

  let newContent = '';
  if (htmlRegex.test(componentContent) && scssRegex.test(componentContent)) {
    let contentArray = componentContent.toString().split(htmlRegex);
    contentArray[1] = 'template:`';
    contentArray[2] = content + '`,';
    contentArray.forEach(con => {
      newContent += con;
    })
    contentArray = newContent.toString().split(scssRegex);

    return new Promise((resolve, reject) => {
      processScss(scssPath)
        .then(result => {
          newContent = '';
          contentArray[1] = 'styles:[`';
          contentArray[2] = result + '`],';
          contentArray.forEach(con => {
            newContent += con;
          })
          resolve(newContent)
        }, err => {
          reject(err);
        })
    });
  }
}

fildFile(filePath);
