const express = require('express');
const router = express.Router();
var mqtt = require('mqtt');
var topicvai = "/cc3200/Meliora/vai"; // vai = Values Analog Input
var topicvao = "/cc3200/Meliora/vao"; // vao = Values Analog Output
var mqttClient = mqtt.connect({
    host: "mqtt.eclipse.org",
    port: 1883,
    username: "meliora",
    password: "123456",
    protocol: "mqtt",
    protocolVersion: 5,
});
var options = {
    retain: true,
    qos: 1
}

// @route  POST api-broker/ioSettings/vai
// @desc   Post analog inputs auto scalling settings to broker.
// @access Public
router.get('/vai', (req, res) => {
    // Recieve message
    mqttClient.on('message', function (topicvai, message, packet) {
        console.log("message is " + message);
        console.log("topic is " + topicvai);
        res.json(message);
    });
});

router.get('/vao', (req, res) => {
    // Recieve message
    mqttClient.on('message', function (topicvao, message, packet) {
        console.log("message is " + message);
        console.log("topic is " + topicvao);
        res.json(message);
    });
});

//////////////// MQTT Stuff ////////////////
mqttClient.on("connect", function () {
    console.log("connected  " + mqttClient.connected);
})

//handle errors
mqttClient.on("error", function (error) {
    console.log("Can't connect" + error);
    process.exit(1)
});

// Subscribe to topic
mqttClient.subscribe(topicvai, { qos: 1 }); // Analog Input Values
mqttClient.subscribe(topicvao, { qos: 1 }); // Analog Output Values


module.exports = router;