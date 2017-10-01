const axios = require('axios');

export default function(email, password) {
    const body = {
        email: email,
        password: password
    };
    return axios.post('http://localhost:8081/users', body)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};