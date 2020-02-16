import jsend from '../../../utils/jsend'

export const getKey = (req, res, next) => {
    const {dictionaryId, key} = req.params
    req.api
        .url(req.endpoints.dictionary.key({dictionaryId, key}))
        .get()
        .then((data) => res.send(jsend.success(data)))
        .catch((error) => {
            return next({...error, errorMessage: error.json.message})
        })
}

export const createKey = (req, res, next) => {
    const {dictionaryId, key} = req.params
    req.api
        .url(req.endpoints.dictionary.key({dictionaryId, key}))
        .resolve((resolver) => resolver.text(), true)
        .post(req.body)
        .then(() => res.send(jsend.success()))
        .catch((error) => {
            return next({...error, errorMessage: error.json.message})
        })
}

export const updateKey = (req, res, next) => {
    const {dictionaryId, key} = req.params
    req.api
        .url(req.endpoints.dictionary.key({dictionaryId, key}))
        .resolve((resolver) => resolver.text(), true)
        .post(req.body)
        .then(() => res.send(jsend.success()))
        .catch((error) => {
            return next({...error, errorMessage: error.json.message})
        })
}

export const deleteKey = (req, res, next) => {
    const {dictionaryId, key} = req.params
    req.api
        .url(req.endpoints.dictionary.key({dictionaryId, key}))
        .resolve((resolver) => resolver.text(), true)
        .delete()
        .then(() => res.send(jsend.success()))
        .catch((error) => {
            return next({...error, errorMessage: error.json.message})
        })
}