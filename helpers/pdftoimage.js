
const { spawn } = require('child_process')
const path = require('path')
const rootPath = path.resolve('../')
const fs = require('fs')

const countPages = (pdf) => {

  const command = spawn('qpdf', [
    '--show-npages',
    rootPath + '/public/assets/pdf/' + pdf
  ])

  return new Promise((resolve, reject) => {

    command.stdout.on('data', (data) => {

      const numberOfPages = parseInt(data, 10)

      resolve(numberOfPages)
    })

    command.stderr.on('data', (data) => {

      reject(data)
    })
  })
}

const getPdfImagePaths = (file, numberOfPages) => {
  
  let imagePathsArray = []

  for (var i = 0; i < numberOfPages; i++) {

    let pdfImagePath = `/assets/pdf/pdfImages/${file}-${i}.png`

    imagePathsArray.push(pdfImagePath)
  }

  return imagePathsArray
}

fs.readdir(rootPath + '/public/assets/pdf/', (err, files) => {

  files.filter(x => x.includes('.pdf')).reduce(async (array, pdf) => {
    
    const collection = await array
    const pdfPages = await countPages(pdf)
    const key = path.parse(pdf).name
    const pdfImagePaths = getPdfImagePaths(key, pdfPages)
    const nameWithoutNum = `${key.substring(0, key.length - 3)}.pdf`
    const thumbnailPath = `/assets/pdf/pdfPreviews/${key}.png`

    let obj = {
      name: pdf,
      nameWithoutNum: nameWithoutNum,
      thumbnailPath: thumbnailPath,
      pages: pdfPages,
      pdfImages: pdfImagePaths
    }

    collection.push(obj)

    return collection

  }, Promise.resolve([])).then(results => {

    return results.sort((a, b) => {

      const nameAlast2nums = parseInt(path.parse(a.name).name.slice(-2), 10)
      const nameBlast2nums = parseInt(path.parse(b.name).name.slice(-2), 10)

      if (nameAlast2nums < nameBlast2nums) {

        return -1
      }

      if (nameAlast2nums > nameBlast2nums) {

        return 1
      }
      
      return 0
    })

  }).then(results => {

    return JSON.stringify(results, null, 2)

  }).then(jsonResults => {

    fs.writeFileSync('pdfInfo.json', jsonResults)

  }).catch(err => {

    console.log(err)
  })
})

//Turn all pdf files into an array of images and save them in a certain folder
//mogrify -format .png -path pdfImages -density 150 *.pdf -quality 90

//Create thumbnail for pdfs and save them in certain folder
//mogrify -format png -thumbnail x300 -path pdfpreviews -density 150 *.pdf[0]