const express = require('express');
const router = express.Router();
var mqtt = require('mqtt');
var topicvao = "/cc3200/Meliora/vao"; // vao = Values Analog Output
var flagTopicVao = "/cc3200/Meliora/flagvao"; // vai = Values Analog Input
var flagTopic = "/cc3200/Meliora/flag";

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

var vao_msg = "0, 0, 0, 0"
var vao_msg_arr = vao_msg.split(','); 
console.log(vao_msg_arr)
var ao_values =  [
    {value: parseFloat(vao_msg_arr[0])},
    {value: parseFloat(vao_msg_arr[1])},
    {value: parseFloat(vao_msg_arr[2])},
    {value: parseFloat(vao_msg_arr[3])}
];
console.log(ao_values)

// @route  GET api-broker/ioSettings/vai
// @desc   Get analog inputs values from broker.
// @access Public

 router.get('/', (req, res) => {
    // Send analog output values to action. 
    if (mqttClient.connected == true) {
        mqttClient.publish(flagTopic, "1", options);
    } 

     res.json(ao_values);
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
mqttClient.subscribe(topicvao, { qos: 1 }); // Analog Output Values
//mqttClient.subscribe(flagTopic, { qos: 1 }); // Analog Output Values

mqttClient.on('message', function (topicvao, message, packet) {
    vao_msg = "" + message;
    console.log("Recieving analog output values: " + message);
    vao_msg_arr = vao_msg.split(','); 
    ao_values =  [
        {value: parseFloat(vao_msg_arr[0])},
        {value: parseFloat(vao_msg_arr[1])},
        {value: parseFloat(vao_msg_arr[2])},
        {value: parseFloat(vao_msg_arr[3])}
    ];
    console.log("topic is " + topicvao);
});


module.exports = router;