const express=require('express')
const routes=express.Router();
const ctrl = require('../controllers/TaskController');

routes
  .route('/')
  .get(ctrl.getTasks)
  
routes
  .route('/waiting')
  .get(ctrl.getWaiting)

routes
  .route('/overdue')
  .get(ctrl.getOverdue)

routes
  .route('/done')
  .get(ctrl.getDone)

routes
  .route('/:id')
  .get(ctrl.getTask)

routes
  .route('/:id')
  .delete(ctrl.deleteTask)

routes
  .route('/:id')
  .put(ctrl.editTask)

routes
  .route('/')
  .post(ctrl.createTask)

module.exports = routes;

