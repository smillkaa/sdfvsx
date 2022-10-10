// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    input saveBookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }

    type Mutation {
        login(email: String!, password:String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: saveBookInput): User
        removeBook(bookId: String!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {

        bookId: ID
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }
`;



// export the typeDefs
module.exports = typeDefs;