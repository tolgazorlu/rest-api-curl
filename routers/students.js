const express = require('express')
const student = require('../models/student')
const router = express.Router()
const Student = require('../models/student')

router.get('/', async(req, res) => {
    try{
        const students = await Student.find()
        res.json(students)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const student = await Student.findById(req.params.id)
        res.json(student)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const student = new Student({
        name: req.body.name,
        studentNo: req.body.studentNo,
        eMail: req.body.eMail
    })

    try{
        const temp = await student.save()
        res.json(temp)
    }catch(err){
        res.send('Error' + err)
    }

})

router.put('/:id', async(req, res) => {
    try{
        const student = await Student.findById(req.params.id)
        student.eMail = req.body.eMail
        const temp = await student.save()
        res.json(temp)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const student = await Student.findByIdAndRemove(req.params.id)
        res.json(student)
    }
    catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router