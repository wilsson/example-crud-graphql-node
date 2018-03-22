import axios from 'axios';

const API_POSTS = 'http://localhost:3001/posts';
const API_AUTHORS = 'http://localhost:3001/authors';

export default {
    Query: {
        posts: async () => {
            let posts = await axios.get(API_POSTS);
            return posts.data;
        }
    },
    Post: {
        author: async (post) => {
            console.log('{post}', post);
            let author = await axios.get(`${API_AUTHORS}/${post.authorId}`);
            return author.data
        }
    },
};