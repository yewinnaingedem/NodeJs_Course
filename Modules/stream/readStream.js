const fs = require('fs');
const creteWriteStream = fs.createWriteStream('../docs/blog4.txt') ;
const createStream = fs.createReadStream('../docs/blog3.txt' , {encoding : "utf-8"});
// createStream.on('data' , (chunk) => {
//     console.log('-- New chuck ---');
//     // console.log(chunk.toString()); // if we don't wanna use toString method we coult pass second argument to the createReadStream functon like this
//     console.log(chunk);
//     creteWriteStream.write('\n New Chunk \n') ;
//     creteWriteStream.write(chunk);
// }) ;

// this way I gonna show is more eaiser way than pervious that is piping 
createStream.pipe(creteWriteStream);
