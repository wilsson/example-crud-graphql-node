import axios from 'axios';

const API_POST = 'http://localhost:3001/posts';

export default {
    Query: {
        holaMundo: (parent, args, context) => 'hola mundo',
        allPosts: async (parent, args, context) => {
            let posts = await axios.get(API_POST);
            return posts.data;
        },
        getPost: async (parent, args, context) => {
            let post = await axios.get(API_POST + '/' + args.id);
            return post.data;
        }
    },
    Mutation: {
        createPost: async (parent, args, context) => {
            let post = await axios.post(API_POST, args);
            return post.data
        },
        deletePost: async (parent, args, context) => {
            console.log('args.id', args);
            /*
            let post = null;
            try {
                post = await axios.delete(API_POST + '/' + args.id);
                console.log(':D');
                return true;
            } catch(e) {
                console.log(':C', e);
                return false;
            }
            */
        }
    }
}