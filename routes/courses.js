const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/', async(req,res) => {

    try{
        const courses = await Course.find();
        res.json(courses);
    }catch(err){
        res.send('Error' +err);
    }
     
});

router.get('/:id', async(req,res) => {

    try{
        const course = await Course.findById(req.params.id);
        res.json(course);
    }catch(err){
        res.send('Error' +err);
    }     
});

router.post('/', async(req,res) => {

    const course = new Course({
        name: req.body.name,
        subject: req.body.subject
    })
    try{
        const c1 = await course.save();
        res.json(c1);
    }catch(err){
        res.send('Error');
    }
     
});

router.patch('/:id', async(req,res) => {

    try{
        const course = await Course.findById(req.params.id);
        const c1 = await course.save();
        res.json(c1);
    }catch(err){
        res.send('Error' +err);
    }
     
});

router.delete('/:id', async(req,res) => {

    try{
        const course = await Course.findById(req.params.id);
        const c1 = await course.remove();
        res.json(c1);
    }catch(err){
        res.send('Error' +err);
    }
     
});

module.exports = router;