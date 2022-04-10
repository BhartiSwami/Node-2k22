//http handels the requests & responces on the server

const http = require('http')

/*function dataControl(req, res){
    res.write("<h1>Hey this is your first server response</h1>")
    res.end();
}
http.createServer(dataControl).listen(1812);*/

//                  or

/*const dataControl = (req, res)=>{
    res.write("<h1>Hey this is your first server response</h1>")
    res.end();
}
http.createServer(dataControl).listen(1812);*/

//                   or

http.createServer((req,res)=>{
res.write("<h1>Hey this is your first server response</h1>")
res.end();
}).listen(1812)