const endpoints = () => {
    const API_ROOT = process.env.API_ROOT
    const dictionaryService = `${API_ROOT}/dictionary`

    return {
        dictionary: {
            new: `${dictionaryService}`,
            one:  ({ dictionaryId }) => `${dictionaryService}/${dictionaryId}`,
            keys: ({ dictionaryId }) => `${dictionaryService}/${dictionaryId}/keys`,
            key: ({ dictionaryId, key }) => `${dictionaryService}/${dictionaryId}/keys/${key}`,
        },
    }
}

export default endpoints