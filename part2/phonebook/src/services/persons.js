import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const add = (person) => {
    return axios.post(baseUrl, person)
}

const modify = (person) => {
    return axios.put (`${baseUrl}/${person.id}`, person)
}

const remove = (id) => {
    const person_url = `${baseUrl}/${id}`
    return axios.delete(person_url)
}

export default {
    getAll,
    add,
    remove,
    modify
}
