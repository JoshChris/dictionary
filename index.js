import express from 'express'
import cors from 'cors'
import { errorHandler, missingHandler } from './middlewares/errorHandler'
import prepareApi from './middlewares/prepareApi'
import v1 from './routes/v1'
require('dotenv').config()

const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/v1', prepareApi, v1)
app.get('/api/health-check', (req, res) => res.status(200).send())

app.use(errorHandler)
app.use(missingHandler)

export default app