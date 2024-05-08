// import jsonServer from 'json-server';
const jsonServer = require("json-server")
const data = require("./db.json")


const server= jsonServer.create();
const router = jsonServer.router(data);
const middleware = jsonServer.defaults();
const port = 3030

server.use(middleware)
server.use(router)
server.listen(port)



