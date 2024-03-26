const amqpqueues = require("./index");
module.exports = {
    publishmsg: (req, res) => {
        const data = {
            title: "Six of Crows",
            author: "Leigh Burdugo"
        }
    
        amqpqueues.sendData(data);
    
        console.log("A message is sent to queue")
        res.send("Message Sent");
    }
}