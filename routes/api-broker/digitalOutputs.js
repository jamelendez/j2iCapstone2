const express = require('express');
const router = express.Router();
var mqtt = require('mqtt');
var topic = "/cc3200/Meliora/do";
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

// Digital Input Channels Model
const DOChannels = require('../../models/DOChannels');

// @route  GET api-broker/digitalInputs
// @desc   Get digital inputs status and public to broker.
// @access Public
router.get('/', (req, res) => {
    DOChannels.find({}, 'status', (err, data) => {
        var msg = ""

        for (var i = 3; i >= 0; i--) {
            var status = "0";
            if (data[i].status) {
                status = "1"
            }
            msg = msg.concat(status);
        }

        if (mqttClient.connected == true) {
            mqttClient.publish(topic, msg, options);
        }
    })
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
mqttClient.subscribe(topic, { qos: 1 });

// Recieve message
mqttClient.on('message', function (topic, message, packet) {
    console.log("message is " + message);
    console.log("topic is " + topic);
});

module.exports = router;