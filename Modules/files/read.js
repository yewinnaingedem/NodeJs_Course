// reading file require fs , it stand for file system 

const { error } = require('console');
const fs = require('fs'); // this is an object ;

// to ansys read file

fs.readFile('../Docs/blog1.txt',(err , data) => { // read file take tow prameter the first one is err, the second one is data ;
    // the data is send as a buffer 
    console.log( data.toString());
}) ; 

// file write 

fs.writeFile('../docs/blog1.txt' , 'hello world this is my name and age are yewin , 22' , () => { // wiret file take 3 argument 
    console.log('File was writtem');    
})

// what would be if the file path are not exists in fs wirteFile method 
const intro = "Hello , world this is default by some one build in"
fs.writeFile('../docs/blog2.txt', intro , (err , intro) => {
    console.log(`${intro} was written`);    
}); 

// file directories 
if (!fs.existsSync('../docs/blog')) {
    fs.mkdir('../docs/blog' , (err) => {
        if(err ) {
            return console.error(err);
        }
        return console.log("file was created");
    });
}else {
    fs.rmdir('../docs/blog' , () => {
        console.log("file removed");
    });
}

if(fs.existsSync('../docs/deleteme.txt')) {
    fs.unlink('../docs/deleteme.txt' , (er) => console.log(er)) ;
}else {
    fs.writeFile('../docs/deleteme.txt' , 'hello world' , (err ) => error || console.log(err  + ' error'));
} ;

