const AuthorType = require("../TypeDefs/authorType")
const { GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql')
const spInput = require('../../services/spInput')
const { executeStoredProcedure } = require('../../Database/QueryandSP')

module.exports.addAuthor = {
    type: AuthorType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(parent, args){
        const paramters = await spInput(args)
        const result = await executeStoredProcedure("addAuthor", paramters)
        return result.recordsets[0][0]
    }
}

module.exports.updateAuthor = {
    type: AuthorType,
    args: {
        AuthorId: { type: new GraphQLNonNull(GraphQLInt) }, 
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(parent, args){
        const paramters = await spInput(args)
        const result = await executeStoredProcedure("updateAuthor", paramters)
        return result.recordsets[0][0]
    }
}

module.exports.deleteAuthor = {
    type: AuthorType,
    args: {
        AuthorId: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(parent, args){
        const paramters = await spInput(args)
        const result = await executeStoredProcedure("deleteAuthor", paramters)
        return result.recordsets[0][0]
    }
}