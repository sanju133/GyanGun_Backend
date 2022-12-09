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

describe('category schema test', ()=>{
    it ('Add category', ()=>{
        const courseSchema={
            'name':"Learn Python ",           
            'user':'6380c6a6d8e4682828f656a9',           
            'category':"Node.js",
            'subcategorys':"Development",
            'description':"It is awesome course",
            'shortdescription':"hello", 
            'audience':"leaners who are interested in learning"                  
        };
        return productModel.create(courseSchema)
        .then((cat_ret)=>{
            expect(cat_ret.category).toEqual("Node.js");
        })
        

        
    });
       
})