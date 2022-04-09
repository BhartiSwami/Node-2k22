//Global - We can directly use/consume these node predefined modules without importing

console.log("Welcome to the world of node")

//Non-Global Modules - We have to import these node predefined modules before using

const fs = require('fs') 

fs.writeFileSync('readme.txt','Hey this file is createwd using non-global core module of node (fs)')

//To get the current Directory path

console.log(__dirname)

//To get the current File path

console.log(__filename)

//Import a perticular package

const fs1 = require('fs').writeFileSync
