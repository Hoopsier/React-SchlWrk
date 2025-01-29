import axios from "axios"
 
const baseUrl = "http://localhost:5041/api/Customers"
 
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = newCustomer => {
        return axios.post(baseUrl, newCustomer)
    }
export default { getAll, create }