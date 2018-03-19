import axios from 'axios'
const base='http://localhost:8000'
// /user
export function getUserList(){
	return axios.get(`${base}/getUsers`)
}
export function saveUser(foo) {
	return axios.post(base+'/saveUser',foo)
}
export function addUser(foo) {
	return axios.post(base+'/addUser',foo)
}
export function deleteUser(foo) {
	return axios.post(base+'/deleteUser',foo)
}

 //  /category
export function getCategories(){
	return axios.get(`${base}/getCategories`)
}
export function saveCategory(foo) {
	return axios.post(base+'/saveCategory',foo)
}
export function addCategory(foo) {
	return axios.post(base+'/addCategory',foo)
}
export function deleteCategory(foo) {
	return axios.post(base+'/deleteCategory',foo)
}