const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')
const { executeQueryString } = require('../../Database/QueryandSP')

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields : () => ({
        AuthorId: { type: GraphQLInt },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(require("./bookType")),
            resolve(parent, args){
                return executeQueryString(`select * from Book where AuthorId = ${parent.AuthorId}`)
            }
        }
    })
})

module.exports = AuthorType