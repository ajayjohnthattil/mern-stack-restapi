const asyncHandler = require('express-async-handler')
// desc - get all tasks
// route - GET/api/tasks
// access - private

const getTasks = asyncHandler(async (req,res)=> {
    res.status(200).json({message: 'Get Tasks'})
})

// desc - set new task
// route - POST/api/tasks
// access - private

const setTask = asyncHandler(async (req,res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a body.text field');
    }
    res.status(200).json({message: 'Set Tasks'})
})

// desc - update task
// route - PUT/api/tasks/:id
// access - private

const updateTask = asyncHandler(async (req,res)=> {
    res.status(200).json({message: `Update tasks ${req.params.id}`})
})

// desc - delete task
// route - DELETE/api/tasks/:id
// access - private

const deleteTask = asyncHandler(async (req,res)=> {
    res.status(200).json({message: `Delete tasks ${req.params.id}`})
})
 

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}