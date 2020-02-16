import jsend from '../utils/jsend'

export const errorHandler = async (err, req, res, next) => {
    console.log(err.errorMessage)
    res.status(err.status||400).send(jsend.error(err.errorMessage))
}

export const missingHandler = async (req, res, next) => {
    console.log(`${req.method} is not supported on this route`)
    res.status(404).send(jsend.error(`${req.method} is not supported on this route`))
}