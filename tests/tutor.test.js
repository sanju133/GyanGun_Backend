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

    it('Add teacher register',()=>{
        const client={
            'name':"Sanju shrestha",
            'email':"sanjumaharjan@gmail.com",
            'password':"Cookies13@@",
            'role':'0',
            'Teacher':'true',
            'description':"hello i am sanju",
            'headline':"It man "


            
        };
        return userModel.create(client)
        .then((cli_ret)=>{
            expect(cli_ret.email).toEqual("sanjumaharjan@gmail.com");
        });
    })

  

})