const fs = require('fs');
const FILE_NAME = './file.txt';
function makeStr() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 500; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

const randomStr = makeStr();

/** Switch the below to unblocking! You will have to use readFile and writeFile */
// write random content to file
fs.writeFileSync(FILE_NAME, randomStr);

// success confirmation
console.log(`Wrote ${randomStr} to file.txt.`);

// read contents from file
const incomingBuf = fs.readFileSync(FILE_NAME);
const readStr = incomingBuf.toString();

// success confirmation
if(readStr === randomStr) {
    console.log('success read the right file contents!');
} else {
    console.log(`failiure got the wrong content: ${readStr}`);
}
/** end */