import express from 'express'
import dictionary from './dictionary'

const v1 = express.Router()

v1.use(dictionary)

export default v1