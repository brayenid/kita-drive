import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const fileExtensionRegex = /\.\w+$/ //IS FILE

const dirPath = path.join(__dirname, '../public')

const Controllers = {
  getAllDirs(req, res) {
    let readFiles = []
    fs.readdir(dirPath, (err, items) => {
      if (err) {
        console.error('Terjadi kesalahan:', err)
        return
      }

      items.forEach((item) => {
        if (fileExtensionRegex.test(item)) {
          readFiles.push({
            name: item,
            type: 'file'
          })
        } else {
          readFiles.push({
            name: item,
            type: 'folder'
          })
        }
      })

      res.json({
        status: 'success',
        data: readFiles
      })
    })
  },
  getDetailDir(req, res) {
    const { directory } = req.params
    let readFiles = []

    fs.readdir(`${dirPath}/${directory}`, (err, items) => {
      if (err) {
        console.error('Terjadi kesalahan:', err)
        return
      }

      items.forEach((item) => {
        if (fileExtensionRegex.test(item)) {
          readFiles.push({
            name: item,
            type: 'file'
          })
        } else {
          readFiles.push({
            name: item,
            type: 'folder'
          })
        }
      })

      res.json({
        status: 'success',
        data: readFiles
      })
    })
  }
}

export default Controllers
