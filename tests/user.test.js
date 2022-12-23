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

    it('Add leaner register',()=>{
        const client={
            'name':"Megha shrestha",
            'email':"megha123@gmail.com",
            'password':"Cookies13@@",
            'role':'0'
            
        };
        return userModel.create(client)
        .then((cli_ret)=>{
            expect(cli_ret.email).toEqual("megha123@gmail.com");
        });
    })

  

})