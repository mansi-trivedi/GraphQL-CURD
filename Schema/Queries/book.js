const BookType = require("../TypeDefs/bookType")
const { GraphQLList, GraphQLInt } = require('graphql')
const { executeQueryString } = require('../../Database/QueryandSP')

module.exports.Book = {  // get book by id
    type: BookType,
    args: {
        BookId: {
            type: GraphQLInt
        }
    },
     async resolve(parent, args){
        const result = await executeQueryString(`select * from Book where BookId = ${args.BookId}`)
        return result[0]
    }

}


module.exports.Books = {  // get list of all books
    type: new GraphQLList(BookType),
    resolve(parent, args) {
        return executeQueryString('select * from Book')
    }
}