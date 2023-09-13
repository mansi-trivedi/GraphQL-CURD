const express = require("express")
const { createHandler } = require("graphql-http/lib/use/express")
const schema = require("./Schema/schema")

const app = express()

const port = 3000

app.all('/graphql', createHandler({ 
    schema
 }))

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})