import {$authHost} from "./index";
import jwt_decode from "jwt-decode";

const getUserId = () => {
	const user_id = jwt_decode(localStorage.getItem('token')).id;
	console.log(user_id);
	return user_id;
}

export const fetchChoiseCourses = async () => {
	const {data} = await $authHost.get('api/choise', getUserId);
	return data;
}

export const createChoiseCourse = async (course_id) => {
	const {data} = await $authHost.post('api/choise', {getUserId, course_id});
	console.log(`{getUserId, course_id}: ${{getUserId, course_id}}`);
	return data;
}

export const deleteChoiseCourse = async (course_id) => {
	const {data} = await $authHost.delete('api/choise/', {getUserId, course_id})
	console.log(`{getUserId, course_id}: ${{getUserId, course_id}}`);
	return data;
}
