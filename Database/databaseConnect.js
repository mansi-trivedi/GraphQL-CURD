const sql = require("mssql");

async function databaseConnect() {
    const config = {        //database Configuration file
        user: 'user',
        password: '1234',
        database: "node",
        server: "localhost",
        port: 1433,
        authentication: {
            type: 'default'
        },
        options: {
            encrypt: true,
            trustServerCertificate: true
        },
    };

    let connection = await sql.connect(config);
    return connection
}


module.exports = { databaseConnect }
