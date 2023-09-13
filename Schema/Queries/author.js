const AuthorType = require("../TypeDefs/authorType")
const { GraphQLList, GraphQLInt } = require('graphql')
const { executeQueryString } = require('../../Database/QueryandSP')


module.exports.Author = { // get author by id
    type: new GraphQLList(AuthorType),
    args: {
        AuthorId: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        const result = executeQueryString(`select * from Author where AuthorId = ${args.AuthorId}`)
        return result[0]
    }
}

module.exports.Authors = { // get list of all authors
    type: new GraphQLList(AuthorType),
    resolve(parent, args) {
        return executeQueryString('select * from Author')
    }
}