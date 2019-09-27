import { CSRF_TOKEN } from "./csrf_token.js"



async function getJSON(response) {
    if (response.status === 204) return '';
    return response.json()
}

// HTTP Request using fetch
function apiService(endpoint, method, data) {
    const config = {
//    Set GET as default
        method: method || "GET",
//        IF data is not undifined then JSON otherwise null
        body: data !== undefined ? JSON.stringify(data) : null,
        headers: {
            'content-type': 'application/json',
            'X-CSRFTOKEN' : CSRF_TOKEN
        }
    };
    return fetch(endpoint, config)
            .then(getJSON)
            .catch(error => console.log(error))
}

// Export function in order to use it anywhere
export { apiService };