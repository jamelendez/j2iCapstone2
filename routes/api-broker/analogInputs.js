const express = require('express');
const router = express.Router();
var mqtt = require('mqtt');
var topic = "/cc3200/Meliora/ai";
var autoScalingTopic = "/cc3200/Meliora/ai/autoscalling";
var slopeInterceptTopic = "/cc3200/Meliora/ai/slopeintercept";
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
const AIChannels = require('../../models/AIChannels');

// @route  GET api-broker/analogInputs
// @desc   Get analog inputs status and public to broker.
// @access Public
router.get('/', (req, res) => {
    AIChannels.find({}, 'status', (err, data) => {
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

// @route  POST api-broker/analogInputs/autoScalling
// @desc   Post analog inputs auto scalling settings to broker.
// @access Public
router.post('/', (req, res) => {
    var msg = "";
    var chNumber = req.body.chNumber.toString();
    var n1 = req.body.n1.toString();
    var n2 = req.body.n2.toString();
    var m1 = req.body.m1.toString();
    var m2 = req.body.m2.toString();
    var unit1 = req.body.unit1;
    var unit2 = req.body.unit2;

    msg = chNumber + "," + n1 + "," + n2 + "," + m1 + "," + m2 + "," + unit1 + "," + unit2;
    if (mqttClient.connected == true) {
        mqttClient.publish(autoScalingTopic, msg, options);
    }
});

// @route  POST api-broker/analogInputs/slopeIntercept
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
mqttClient.subscribe(autoScalingTopic, { qos: 1 });
mqttClient.subscribe(slopeInterceptTopic, { qos: 1 });


// Recieve message
mqttClient.on('message', function (topic, message, packet) {
    console.log("message is " + message);
    console.log("topic is " + topic);
});



module.exports = router;