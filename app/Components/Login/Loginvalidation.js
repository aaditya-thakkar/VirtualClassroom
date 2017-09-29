import _ from 'lodash';
const axios = require('axios');

export default function(email, password) {
     return axios.get('http://localhost:8081/users')
        .then(response => {
            console.log(response.data);
            return _.keyBy(response.data, 'email');
        })
        .catch(error => {
            console.log(error);
        });
};