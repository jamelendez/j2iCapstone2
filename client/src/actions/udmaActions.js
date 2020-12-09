import axios from 'axios';

export const sendAddressesToMQTTBroker = (addresses) => {
    axios.post('/api-broker/userDefinedModbusAddressing', addresses);
}