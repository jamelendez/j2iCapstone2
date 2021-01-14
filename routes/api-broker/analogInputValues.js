const express = require('express');
const router = express.Router();
var mqtt = require('mqtt');
var topicvai = "/cc3200/Meliora/vai"; // vai = Values Analog Input
var flagTopicVai = "/cc3200/Meliora/flagvai";

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
    qos: 1
}

var vai_msg = "0, 0, 0, 0"
var vai_msg_arr = vai_msg.split(','); 
//console.log(vai_msg_arr)
var ai_values =  [
    {value: parseFloat(vai_msg_arr[0])},
    {value: parseFloat(vai_msg_arr[1])},
    {value: parseFloat(vai_msg_arr[2])},
    {value: parseFloat(vai_msg_arr[3])}
];
//console.log(ai_values)

// @route  POST api-broker/ioSettings/vai
// @desc   Get analog inputs values from broker.
// @access Public
router.get('/', (req, res) => {
    // Send analog input values to action. 
    if (mqttClient.connected == true) {
        mqttClient.publish(flagTopicVai, "1", options);
    }
    // if (mqttClient.connected == true) {
    //     mqttClient.publish(topicvai, vai_msg, options);
    // }
    res.json(ai_values);
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

mqttClient.on('message', function (topicvai, message, packet) {
    console.log("Recieving analog input values: " + message);
    vai_msg = message
    console.log("topic is " + topicvai);
});


module.exports = router; 