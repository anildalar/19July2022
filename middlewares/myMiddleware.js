// YOu can store functions inside a variable HOF
const mwfn1 = (req,res,next)=>{
    console.log(req.query);
    /*
    for (key in object) {
        // code block to be executed
    }
    */
    let fulldetail = '';
    for(k in req.query){
        //objectName["property"]   // person["age"]

        
        //console.log(k);  // Key
        //console.log(req.query[k]); // Value

        //fulldetail = fulldetail + req.query[k] + ' ';
        fulldetail += req.query[k] + ' ';

    }
    req.query = {fulldetail}

    console.log(fulldetail);
    
    next()
};


//You have to export

//There are two way you can export in Node

module.exports = {mwfn1}

