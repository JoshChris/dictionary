import wretch from 'wretch'
import nodeFetch from 'node-fetch'
import { URLSearchParams } from 'url'
import apiEndpoints from './apiEndpoints'

export const api = wretch()
    .polyfills({
        fetch: nodeFetch,
        URLSearchParams,
    })
    .resolve((resolver) => resolver.json((res) => res))
    .errorType('json')

export const endpoints = apiEndpoints