import jsend from '../../../utils/jsend'

export const getKeys = (req, res, next) => {
    const { dictionaryId } = req.params
    req.api
        .url(req.endpoints.dictionary.keys({dictionaryId}))
        .get()
        .then((data) => res.send(jsend.success(data)))
        .catch((error) => {
            return next({ ...error, errorMessage: error.json.message })
        })
}