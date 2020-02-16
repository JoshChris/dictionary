import express from 'express'

import { newDictionary, deleteDictionary } from './dictionary'
import { getKeys } from './keys'
import { getKey, createKey, updateKey, deleteKey } from './key'

const dictionaryRouter = express.Router()
const routes = express.Router()

routes.post('/new', newDictionary)
routes.delete('/:dictionaryId/delete', deleteDictionary)
routes.get('/:dictionaryId/keys', getKeys)
routes.get('/:dictionaryId/key/:key', getKey)
routes.post('/:dictionaryId/key/:key', createKey)
routes.patch('/:dictionaryId/key/:key', updateKey)
routes.delete('/:dictionaryId/key/:key', deleteKey)

dictionaryRouter.use('/dictionary', routes)

export default dictionaryRouter