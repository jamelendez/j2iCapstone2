const express = require('express');
const router = express.Router();
var mqtt = require('mqtt');
var topic = "/cc3200/Meliora/ao";
var slopeInterceptTopic = "/cc3200/Meliora/ao/slopeintercept";
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

// Digital Input Channels Model
const AOChannels = require('../../models/AOChannels');

// @route  GET api-broker/digitalInputs
// @desc   Get digital inputs status from dB and publish to broker.
// @access Public
router.get('/', (req, res) => {
    AOChannels.find({}, 'status', (err, data) => {
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

// @route  POST api-broker/analogOutputs/slopeIntercept
// @desc   Post analog inputs auto scalling settings to broker.
// @access Public
router.post('/slopeIntercept', (req, res) => {
    var msg = "";
    var chNumber = req.body.chNumber.toString();
    var M = req.body.M.toString();
    var D = req.body.D.toString();
    var unit = req.body.unit;


    msg = chNumber + "," + M + "," + D + "," + unit;
    if (mqttClient.connected == true) {
        mqttClient.publish(slopeInterceptTopic, msg, options);
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
mqttClient.subscribe(topic, { qos: 1 });
mqttClient.subscribe(slopeInterceptTopic, { qos: 1 });

// Recieve message
mqttClient.on('message', function (topic, message, packet) {
    console.log("Analog Output Status: " + message);
    console.log("topic is " + topic);
});

module.exports = router;