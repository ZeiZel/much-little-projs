import axios from 'axios/index';

export default class PostService {
	static async getAll() {
		try {
			const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
			return posts.data;
		} catch (e: unknown) {
			console.error(e);
		}
	}
}
