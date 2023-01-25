const {MongoClient} = require('mongodb')
var data = {}

async function main(object){
  
    const uri = "mongodb+srv://ishaansangwan:Quantum2003@cluster0.oc8kngz.mongodb.net/?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        data = await  changeDatabase(client,object);
        return data
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


async function changeDatabase(client,object){
    documents = await client.db('myFirstDatabase').collection('posts').findOne(object)
    // console.log(documents)
    return documents
   
}

module.exports = { main };