const { query } = require("express");

const MongoClient = require("mongodb").MongoClient;
const dbutil = require(__dirname+'/db-util/dbops');
const uri ='mongodb://127.0.0.1:27017';
const dbName = "physicsDB";

const client = new MongoClient(uri, {useNewUrlParser:true});

client.connect((e)=>{
    
    console.log("Connected to " + uri + "/");    
    
    const db = client.db(dbName);

    const cObj = db.collection("books");
    /*
    dbutil.findDoc(cObj, (e, docs)=>{
        if (e!==undefined){
            console.log(e);
        }else {
            console.log(docs);
        }
        client.close();
    });
    */
    dbutil.createDoc(cObj, (e, res)=>{
        if (e!==undefined){
            console.log(e);
        }else {
            console.log(res);
        }
        client.close();
    });
    /*
    dbutil.updateDoc(cObj, (e, res)=>{
        if (undefined!==e){
            console.log(e);
        }else{
            console.log(res);
        }
        client.close();
    });
    */
});

