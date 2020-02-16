const jsend = {
    success: function(data) {
        return {
            status: 'success',
            data,
        }
    },
    error: function(message) {
        return {
            status: 'error',
            message,
        }
    },
    fail: function(data) {
        return {
            status: 'fail',
            data,
        }
    },
}

module.exports = jsend