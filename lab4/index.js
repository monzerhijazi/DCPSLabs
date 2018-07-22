const fs = require('fs');
const FILE_NAME = './file.txt';

function makeStr() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 500; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}


console.log('PROGRAM STARTING');

const randomStr = makeStr();

/** Switch the below to unblocking! You will have to use readFile and writeFile */
// write random content to file
fs.writeFile(FILE_NAME, randomStr, function() {
    // success confirmation
    console.log('FILE WRITTEN');

    // read contents from file
    fs.readFile(FILE_NAME, function (err, incomingBuf) {
        console.log('FILE READ')
        const readStr = incomingBuf.toString();

        // success confirmation
        if(readStr === randomStr) {
            console.log('SUCCESS read the right file contents!');
        } else {
            console.log(`failiure got the wrong content: ${readStr}`);
        }

        //delete file
        fs.unlink(FILE_NAME, function(err) {
            if(err) {
                throw err;
            }
            console.log('FILE DELETED')
        });
    });
});

console.log('PROGRAM ENDING!!')
