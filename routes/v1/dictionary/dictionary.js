import jsend from '../../../utils/jsend'

export const newDictionary = (req, res, next) => {
    req.api
        .url(req.endpoints.dictionary.new)
        .post()
        .then((data) => res.send(jsend.success(data)))
        .catch((error) => {
            return next({ ...error, errorMessage: error.message })
        })
}

export const deleteDictionary = (req, res, next) => {
    const { dictionaryId } = req.params
    req.api
        .url(req.endpoints.dictionary.one({dictionaryId}))
        .resolve((resolver) => resolver.text(), true)
        .delete()
        .then(() => res.send(jsend.success()))
        .catch((error) => {
            return next({ ...error, errorMessage: error.json.message })
        })
}