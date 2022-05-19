const asyncHandler = require('express-async-handler')

const task = require('../model/taskModel')
// desc - get all tasks
// route - GET/api/tasks
// access - private

const getTasks = asyncHandler(async (req,res)=> {
    const tasks = await task.find()
    res.status(200).json(tasks)
})

// desc - set new task
// route - POST/api/tasks
// access - private

const setTask = asyncHandler(async (req,res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a body.text field');
    }

    const tasks = await task.create({
        text: req.body.text
    }) 
    res.status(200).json(tasks)
})

// desc - update task
// route - PUT/api/tasks/:id
// access - private

const updateTask = asyncHandler(async (req,res)=> {

    const tasks = await task.findById(req.params.id)

    if(!tasks){
        res.status(400)
        throw new Error('task nor found')
    }
    const updatedTask = await task.findByIdAndUpdate(req.params.id,req.body,{new:true,})
    res.status(200).json(updatedTask)
})

// desc - delete task
// route - DELETE/api/tasks/:id
// access - private

const deleteTask = asyncHandler(async (req,res)=> {
    const tasks = await task.findById(req.params.id)

    if(!tasks){
        res.status(400)
        throw new Error('task not found')
    }
    await tasks.remove()
    res.status(200).json({id: req.params.id})
})
 

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}