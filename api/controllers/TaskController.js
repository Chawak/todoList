'use strict';

const Task = require('../models/Task');

const ctrl = {

    getTasks: async (req, res) => {
      const tasks=await Task.find();
      return res.status(200).send(tasks);
    },
  
    getTask: async (req, res) => {
      const id=req.params.id;
      const task=await Task.findById(id);
      if(!task)
        return res.status(404).send("Task is not found");
      return res.status(200).send(task);;
    },

    getWaiting: async (req, res) => {
      const date = new Date();
      const tasks=await Task.find({taskStatus:"Waiting",dueDate:{$gte:date}}).sort({ urgentLevel: -1, dueDate: 1 });
      return res.status(200).send(tasks);
    },

    getOverdue: async (req, res) => {
      const date = new Date();
      const tasks=await Task.find({taskStatus:"Waiting",dueDate:{$lt:date}}).sort({ urgentLevel: -1, dueDate: 1 });;
      return res.status(200).send(tasks);
    },

    getDone: async (req, res) => {
      const tasks=await Task.find({taskStatus:"Done"});
      return res.status(200).send(tasks);
    },
  
    deleteTask: async (req, res) => {
        const id=req.params.id;
        const task=await Task.findByIdAndRemove(id);
        if(!task)
            return res.status(404).send("Task is not found");
        return res.status(200).send(task);
    },

    editTask: async(req,res)=>{
      const id=req.params.id;
      const task=await Task.findByIdAndUpdate(id,{$set:req.body});
      if(!task)
          return res.status(404).send("Task is not found");
      return res.status(200).send(task);

    },

    createTask: async (req, res) => {
      if (req.body.name) {
        const newTask=await Task.create(req.body);
        return res.status(201).send(newTask);
      } else {
        return res.send("Add task name.");
      }
    },
  };
  
  module.exports = ctrl;