import axios from "axios"
 
const baseUrl = "http://localhost:5041/api/Users"
 
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
 
const create = newUser => {
    return axios.post(baseUrl, newUser)
}
const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}
 
const update = (object) => {
    return axios.put(`${baseUrl}/${object.id}`, object)
}
 
 
export default { getAll, create, remove, update  }