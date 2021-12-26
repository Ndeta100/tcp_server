const net =require('net')
const server=net.createServer()

// Setti up the server and establishing a connection
server.on('connection',(socket)=>{
    const remoteAddress=socket.remoteAddress + ":"+ socket.remotePort
    console.log("new client connection is made " + remoteAddress)

    socket.on('data', (client)=>{
        console.log('connection data from ' + client + " and remote address " + remoteAddress)

        socket.write(` Hello ${client}`)
       
    })
    socket.once('close',()=>{
      console.log(`Connection from ${remoteAddress} closed`)
    })

    socket.on('error',(err)=>{
        console.log(`Connection error for remote address ${remoteAddress} ERROR ${err.message}`)

    })
})

server.listen(9000, ()=>{
    console.log("server listening at port " + JSON.stringify(server.address()))
})