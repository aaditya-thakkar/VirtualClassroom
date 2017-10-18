const axios = require('axios');
import _ from 'lodash';

export default function() {
    return axios.get('http://localhost:8081/users')
        .then(response => {
            const userSession = localStorage.getItem("AUTH_USER");
            const userList = _.keyBy(response.data, 'email');
            return userList[userSession].tutorId;
        })
        .then(tutorId => {
            return axios.get('http://localhost:8081/courses')
                .then(response => {
                     return _.filter(response.data, (o) => {
                       return o.tutorId === tutorId;
                    });
                })
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};