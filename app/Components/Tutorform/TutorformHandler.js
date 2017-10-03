import _ from 'lodash';
const axios = require('axios');

const getuserdata = () => {
    return axios.get('http://localhost:8081/users')
        .then(response => {
            console.log(response.data);
            return _.keyBy(response.data, 'email');
        })
        .catch(error => {
            console.log(error);
        });
};

export default function (email) {

    let id;
    let password;
    return getuserdata().then(users => {
        console.log("id is " + users[email.toString()]._id);
        id = users[email.toString()]._id;
        password = users[email.toString()].password;
        const body = {
            email: email,
            password: password,
            istutor: "true"
        };
        return { body: body, id: id };


    }).then(obj => {
        const url = `http://localhost:8081/users/${obj.id}`;
        console.log(url);
        return axios.put(url, obj.body)
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    });




};