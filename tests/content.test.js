const productModel  = require("../models/CourseModel");
const mongoose= require('mongoose');

//new database

const url= 'mongodb://localhost:27017/elearning';
beforeAll(async()=>{
    await mongoose.connect(url, {
        useNewUrlParser: true,
    });
});

afterAll(async()=>{
    await mongoose.connection.close();
})

describe('content schema test', ()=>{
    it ('Add content', ()=>{
        const courseSchema={
            'name':"Learn Python ",           
            'user':'6380c6a6d8e4682828f656a9',           
            'category':"Adobe",
            'description':"It is awesome course",
            'shortdescription':"hello",   
           

        };
        return productModel.create(courseSchema)
        .then((cat_ret)=>{
            expect(cat_ret.category).toEqual("Adobe");
        })
        

        
    });
       
})