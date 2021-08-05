const http=require('http')
const server=http.createServer((req,res)=>{
    console.log('New connection')
    res.end('This is Sandeep, working on my first GCP-Cloud Run and Cloud Build')
})
const PORT=process.env.PORT || 8080
server.listen(PORT, ()=>console.log('Listening'))
