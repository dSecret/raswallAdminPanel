import login from './pages/login/login.vue'
import home from './pages/home/home.vue'
	import inhome from './pages/home/home/home.vue'
	import users from './pages/home/userManagement/users.vue'
	import category from './pages/home/userManagement/category.vue'

export default [
	{
		path:"/",component:home,
	 	children:[
	 		{path:'',component:inhome},
	 		{path:'users',component:users},
	 		{path:'user-type',component:category}
		]
	},
	{
		path:"/login",component:login}
  ]