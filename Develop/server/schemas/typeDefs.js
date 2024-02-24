const typeDefs = `
 type User {
    _id: ID
    username: String
    email: String
    bookcount: Int
    savedBooks: [bookSchema]
  }  
  type Book {
   book.id: ID!
   authors: [String]
   description: String!
   title: String!
   image: String
   link: String


  }
  type Auth {
   token: ID!
   user: [userSchema]
  }
  
    # The Query type is built-in to GraphQL, so we only need to extend it to include which kinds of information we plan to request in our application
    # Important for useQuery: We define our Query type to inform our entry points
    type Query {
      me: [userSchema]!
    }
  
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String] , description: String!, title: String!, bookId: ID!, image: String, link: String): [userSchema]
        removeBook(bookId: ID!): [userSchema]
    }
`;
module.exports = typeDefs;
