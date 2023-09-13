const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')
const AuthorType = require('./authorType')
const { executeQueryString } = require('../../Database/QueryandSP')

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields : () => ({
        BookId: { type: GraphQLInt },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            async resolve(parent, args){
                const result = await executeQueryString(`select * from Author where AuthorId = ${parent.AuthorId}`)
                return result[0]
            }
        } 
    })
})

module.exports = BookType