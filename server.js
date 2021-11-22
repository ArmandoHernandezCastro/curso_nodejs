const express = require("express");

class Server{
    contructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes(){
        this.app.get("/", function (req, res) {
            res.send("hola mundo"); 
        });
    }

    listen() {
        this.app.listen(this.port);
    }
}

module.exports = Server;