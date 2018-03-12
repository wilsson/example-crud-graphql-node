export default `
    type Post {
        title: String!
        author: String!
        id: ID!
    }
    type Query {
        holaMundo: String,
        allPosts: [Post]!
        getPost(id: ID!): Post!
    }
    type Mutation {
        deletePost(id: ID!): Boolean!
        createPost(title: String!, author: String!): Post
    }
`