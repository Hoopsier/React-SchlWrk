import axios from "axios";

const baseUrl = "http://localhost:5041/api/Products";

const getAll = async () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
}

const create = async (newProduct) => {
    return axios.post(baseUrl, newProduct);
}
export default { getAll, create}