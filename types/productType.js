export default `
    type Product {
        id: ID
        description: String
        price: Int
    }
    type Query {
        products: [Product]
        product(id: ID!): Product
    }
    type Mutation {
        deleteProduct(id: ID!): Boolean!
        createProduct(description: String!, price: Int!): Product
    }
`