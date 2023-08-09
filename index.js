const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    let file_name=+new Date()
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.writeFile(`${filesname}.txt`, 
    `Time is-${new Date()}` ,'utf-8',()=>{})
fs.readFile(`${filesname}.txt`,'utf-8',(error,data)=>{
    if(error){
console.log(error)
 }
 else{
    res.end(data)
 }
})
    })


server.listen(8000,()=>console.log("server is listening port 8000"))