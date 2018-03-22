export default `
    type Post {
        id: Int!
        title: String
        author: Author
    }
    type Query {
        posts: [Post]
    }
`;