const BookType = require("../TypeDefs/bookType")
const { GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql')
const spInput = require('../../services/spInput')
const { executeStoredProcedure } = require('../../Database/QueryandSP')

module.exports.addBook = {
    type: BookType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        AuthorId: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(parent, args) {
        const paramters = await spInput(args)
        const result = await executeStoredProcedure("addBook", paramters)
        return result.recordsets[0][0]
    }
}

module.exports.updateBook = {
    type: BookType,
    args: {
        BookId: { type: new GraphQLNonNull(GraphQLInt) }, 
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        AuthorId: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(parent, args){
        const paramters = await spInput(args)
        const result = await executeStoredProcedure("updateBook", paramters)
        return result.recordsets[0][0]
    }
}

module.exports.deleteBook = {
    type: BookType,
    args: {
        BookId: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(parent, args){
        const paramters = await spInput(args)
        const result = await executeStoredProcedure("deleteBook", paramters)
        return result.recordsets[0][0]
    }
}
