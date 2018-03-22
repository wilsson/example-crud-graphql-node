export default `
    type Author {
        id: Int!
        name: String
        age: Int
        posts: [Post]
    }
    type Query {
        author(id: Int!): Author
    }
`