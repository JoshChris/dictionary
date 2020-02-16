import { api, endpoints } from '../api'

const prepareApi = (req, res, next) => {
    req.api = api
        .auth(`Basic ${process.env.JWT}`)

    req.endpoints = endpoints()
    next()
}

export default prepareApi