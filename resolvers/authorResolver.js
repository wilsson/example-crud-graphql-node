import axios from 'axios';

const API_AUTHORS = 'http://localhost:3001/authors';
const API_POSTS = 'http://localhost:3001/posts';

export default {
    Query: {
        author: async (parent, { id }, context) => {
            let author = await axios.get(`${API_AUTHORS}/${id}`);
            return author.data;
        }
    },
    Author: {
        posts: async (author) => {
            console.log('{author}', author);
            let post = await axios.get(`${API_POSTS}/?authorId=${author.id}`);
            return post.data
        },
    },
}