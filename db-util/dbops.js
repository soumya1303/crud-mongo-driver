const findDocument=(cObj, callback)=>{
    /* The toArray() method returns an array that contains all the documents from a cursor. The method iterates completely the cursor, loading all the documents into RAM and exhausting the cursor*/
    cObj.find({}).toArray((e, docs)=>{        
        callback(e, docs);
    });

}

const createDocument = (cObj, callback)=>{

    var newbook={
        title: 'Black Holes: The Key to Understanding the Universe',
        ISBN: '0008350752',
        author: 'Brian Cox',
        publisher: 'William Collins',
        edition: 1,
        dimension: { len: 6, width: 4, height: 1 },
        price: [ { "seller" : "amazon", "price" : 9.99 }, { "seller" : "William Collins Publisher", "price" : 10.99 }],
        language: [ 'English']
      }

    cObj.insertOne(newbook, (e, res)=>{
        callback(e, res);
    });

}

const updateDocument = (cObj, callback)=>{
    const filter={
        ISBN:'1009203606'
    }
    const updStmnt={
        $set:{
            publisher:'Cambridge UP'
        }
    }

    cObj.updateOne(filter, updStmnt, (e, res)=>{
        callback(e, res);
    });
}

module.exports.findDoc = findDocument;
module.exports.createDoc = createDocument;
module.exports.updateDoc = updateDocument;

