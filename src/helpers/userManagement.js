import axios from 'axios'
const base='http://localhost:8000'

export function getUserList(){

	return axios.get(`${base}/getUsers`)
}