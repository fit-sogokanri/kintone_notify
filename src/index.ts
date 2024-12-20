import http from "http";
import {app} from "./app";
import { config } from "dotenv-safe";

config();

const debug_mode = process.env.NODE_ENV==="development";
if (debug_mode) {
    // @ts-ignore
    //process.env.DEBUG = 'kintone_to_teams:*'
}

const debug = require('debug')('kintone_to_teams:index');

const port = parseInt(process.env.PORT || "3000", 10);

app.set("port", port)
const server = http.createServer(app)
server.listen(port);

server.on("listening", ()=>{
    const address = server.address()
    const bind = typeof address === "string"
        ? "pipe " + address
        : "port " + address?.port
    debug("Listening on " + bind)
})

server.on("error", (error)=>{
    throw error;
})