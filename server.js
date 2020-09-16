const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const articlesRouter = require('./routes/articles')
const usersRouter = require('./routes/users')
const categoriesRouter = require('./routes/categories')

require('dotenv').config()

// Initialize Express
const app = express()

app.use(cors())
app.use(express.json())

// Connect to MongoDB
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})
// Morgan (log requests)
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: false }))

// Routes
app.use('/articles', articlesRouter)
app.use('/users', usersRouter)
app.use('/categories', categoriesRouter)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
}
)
