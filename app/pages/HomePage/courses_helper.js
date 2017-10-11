const axios = require('axios');

export default function() {
    return axios.get('http://localhost:8081/courses')
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};