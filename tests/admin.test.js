const mongoose= require('mongoose');
const userModel = require("../models/userModel");


const url= 'mongodb://localhost:27017/elearning';
beforeAll(async()=>{
    await mongoose.connect(url, {
        useNewUrlParser: true,
    });
});

afterAll(async()=>{
    await mongoose.connection.close();
})

describe('user schema test', ()=>{

    it('Add admin register',()=>{
        const client={
            'name':"Sanju shrestha",
            'email':"sanjumaharjan12@gmail.com",
            'password':"Cookies13@@",
            'role':'1'
            
        };
        return userModel.create(client)
        .then((cli_ret)=>{
            expect(cli_ret.email).toEqual("sanjumaharjan12@gmail.com");
        });
    })

  

})