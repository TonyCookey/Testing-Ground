import Home from "./components/Home.vue";
import User from "./components/user/User.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Details from "./components/user/UserDetail.vue";
import Edit from "./components/user/UserEdit.vue";
import Start from "./components/user/UserStart.vue";

export const routes = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/user",
		component: User,
		children: [
			{
				path: "",
				component: Start
			},
			{
				path: ":id",
				component: Details
			},
			{
				path: ":id/edit",
				component: Edit,
				name: "userEdit"
			}
		]
	},
	{
		path: "/hello",
		component: HelloWorld
	}
];
