import axios from 'axios'
 
const baseUrl = "http://localhost:5041/api/Authentication"
 
const authenticate = (userForAuth) => {
    const request = axios.post(baseUrl, userForAuth)
    return request.then(response => response)
}
 
export default { authenticate }