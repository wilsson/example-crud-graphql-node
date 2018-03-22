export default `
    type Client {
        id: ID
        name: String
        age: Int
    }
    type Query {
        clients: [Client]
        client(id: ID!): Client
    }
    type Mutation {
        deleteClient(id: ID!): Boolean!
        createClient(name: String!, age: Int!): Client
    }
`