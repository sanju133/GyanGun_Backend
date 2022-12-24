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

describe('review schema test', ()=>{
    it ('Add review', ()=>{
        const reviewSchema={
            'name':"Learning Python for Data Analysis and Visualization",
            'rating':"2",
            'comment':'Good product',
            'user':'6380c6a6d8e4682828f656a9',
            'Likes':'1',
            'DisLikes':"2",
            'category':"hi",
            'description':"hahhahha",
            'shortdescription':"hello"



            
            
            
        };

        return productModel.create(reviewSchema)
        .then((cat_ret)=>{
            expect(cat_ret.category).toEqual("hi");
        })
        

        
    });
       
})