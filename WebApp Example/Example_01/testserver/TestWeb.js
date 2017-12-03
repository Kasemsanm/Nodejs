const request = require("request")
const faker = require('faker')
const async = require('async')
const items = []

const q = async.queue((task,callback) =>{
    callback();
},1)

q.drain = () =>{
    console.log("All Done")
}

for(i = 0;i < 100;i++){
    request.post('http://10.22.24.57:3000/users').form({
        name: faker.name.firstName(),
    lastname: faker.name.lastName(),
        email: faker.internet.email()})
    console.log("finish Post User")
}

q.push(items,(err) =>{

})