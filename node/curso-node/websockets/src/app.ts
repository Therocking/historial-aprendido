import { WebSocket, WebSocketServer } from "ws";

const port = 8081
const wss = new WebSocketServer({ port });

wss.on('connection', function connetcion(ws) {
   console.log('Client connected')
   ws.on('error', console.error)

   ws.on('message', function message(data) {
      console.log('Desde el cliente: %s', data);
      const payload = {
	 type: 'custom-message',
	 msg: data.toString()
      }

      //ws.send( JSON.stringify(payload) )
      wss.clients.forEach(function each(client) { // Emite el evento a todo los clientes
	 if(client !== ws && client.readyState === WebSocket.OPEN) {
	    client.send(JSON.stringify(payload), {binary: false})
	 }
      })
   })

   //ws.send('Hola desde el servidor') 

   ws.on('close', function(ws) {
      console.log('Disconnected')
   })
})

console.log('Socket running on port %d', port)
