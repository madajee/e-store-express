const amqpqueuesConfig = require("../../config.js");

const amqp = require("amqplib");
var channel, connection;

//connectQueue() // call connectQueue function
async function connectQueue() {
    try {

        connection = await amqp.connect("amqp://" +  amqpqueuesConfig.HOST + ":5672");
        channel = await connection.createChannel()
        
        // connect to 'test-queue', create one if doesnot exist already
        await channel.assertQueue("test-queue")
        console.log("amqpqueues connection successful");
        
    } catch (error) {
        console.log(error)
    }
}
const sendData = async (data) => {
    // send data to queue
    await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));
        
    // close the channel and connection
    // await channel.close();
    // await connection.close();
}

const amqpqueues = {};
amqpqueues.sendData = sendData;
amqpqueues.connectQueue = connectQueue;

module.exports = amqpqueues;