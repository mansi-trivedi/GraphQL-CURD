const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const { Book, Books } = require("./Queries/book")
const { Author, Authors } = require('./Queries/author')
const { addAuthor, updateAuthor, deleteAuthor } = require("./Mutations/author")
const { addBook, updateBook, deleteBook } = require("./Mutations/book")

const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields : {
        Book,
        Books,
        Author,
        Authors
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor,
        updateAuthor,
        deleteAuthor,
        addBook,
        updateBook,
        deleteBook
    }
})


module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: Mutation
})