const mongoose = require('mongoose')
const { mongodb } = require('../config')
mongoose.set('useFindAndModify', false)

mongoose
	.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.name}`, { useNewUrlParser: true })
	.then(() => {
	  console.log("Connected to mongo database successfully")
	 })
   .catch((error)=> {
    console.log(`Unable to connect to the mongo , ${JSON.stringify(error)}`)
   })
const { connection } = mongoose   
module.exports = connection