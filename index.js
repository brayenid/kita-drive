import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(routes)
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log('Server is running')
})
