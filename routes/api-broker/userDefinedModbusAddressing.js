const express = require('express');
const router = express.Router();
var mqtt = require('mqtt');
var topic = "/cc3200/Meliora/addressing";
var mqttClient = mqtt.connect({
    host: "mqtt.eclipseprojects.io",
    port: 1883,
    username: "meliora",
    password: "123456",
    protocol: "mqtt",
    protocolVersion: 5,
});
var options = {
    retain: true,
    qos: 2
}

// udma = user-defined modbus addressing
// @route  POST api-broker/analogOutputs/slopeIntercept
// @desc   Post analog inputs auto scalling settings to broker.
// @access Public
router.post('/', (req, res) => {
    var msg = "";
    msg = req.body.toString();
    console.log(msg);
    if (mqttClient.connected == true) {
        mqttClient.publish(topic, msg, options);
    }
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
mqttClient.subscribe(topic, { qos: 2 });

// Recieve message
mqttClient.on('message', function (topic, message, packet) {
    console.log("message is " + message);
    console.log("topic is " + topic);
});

module.exports = router;