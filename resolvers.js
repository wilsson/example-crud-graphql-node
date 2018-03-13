import axios from 'axios';

const API_POST = 'http://localhost:3001/posts';

export default {
    Query: {
        allPosts: async (parent, args, context) => {
            let posts = await axios.get(API_POST);
            return posts.data;
        },
        getPost: async (parent, args, context) => {
            let post = await axios.get(`${API_POST}/${args.id}`);
            return post.data;
        }
    },
    Mutation: {
        createPost: async (parent, args, context) => {
            let post = await axios.post(API_POST, args);
            return post.data
        },
        deletePost: async (parent, args, context) => {
            let post = null;
            try {
                post = await axios.delete(`${API_POST}/${args.id}`);
                return post.data;
            } catch(e) {
                return false;
            }
            
        }
    }
}