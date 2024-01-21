export default {
    request(request) {
        console.log('request : ', request);
        return request;
    },

    requestError(error) {
        // Do something with request error
        console.log('requestError: ', error)
        return Promise.reject(error);
    },

    response(response) {
        console.log('response : ', response);
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },

    responseError(error) {
        console.log('responseError : ', error);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
}
