import {$authHost, $host} from "./index";

export const createCourse = async (course) => {
	const {data} = await $authHost.post('api/cards', course);
	return data;
}

export const fetchCourse = async (id) => {
	const {data} = await $host.get('api/cards/'+id);
	return data;
}

export const fetchCourses = async () => {
	const {data} = await $host.get('api/cards');
	return data;
}

export const updateCourse = async (updateCourse) => {
	const {data} = await $authHost.put('api/cards/', updateCourse)
	return data;
}

export const deleteCourse = async (course_id) => {
	const {data} = await $authHost.delete('api/cards/'+course_id)
	return data;
}
