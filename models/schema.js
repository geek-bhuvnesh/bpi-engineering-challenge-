/**
 * Module dependencies.
 */
 const mongoose = require('mongoose')
 const connection = require('./connection')
 const { mongodb } = require('../config')
 
 const multiTenancyAgentSchema = mongoose.Schema({
   id: String,
   jobName: String,
   submitted: Date,
   execution: Date,
   status: {
    type: String,
    enum: ['Completed', 'Scheduled'],
    default: 'Completed'
   },
   isImportant: {
     type: Boolean,
     default: false
   }
 })
 
 const schema = connection.model(mongodb.multiTenancyAgentCollection, multiTenancyAgentSchema)
 
 module.exports = schema