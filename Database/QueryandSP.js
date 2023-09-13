const { databaseConnect } = require('./databaseConnect')

async function executeQueryString(queryString) {
    const pool = await databaseConnect()
    let request = pool.request();
    let info = await request.query(queryString);
    return info.recordsets[0];
}

async function executeStoredProcedure(spName, parameters){
    let pool = await databaseConnect()
    let request = pool.request()

    if(parameters == undefined || parameters == null){
        return request.execute(spName);
    }
    else{
        parameters.forEach(elementContainingInfo => {
            let [name,dtype,value] = elementContainingInfo;
            request.input(name,dtype,value)
        });

    return request.execute(spName)
    }
}

module.exports = { executeStoredProcedure, executeQueryString }