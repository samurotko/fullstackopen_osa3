const mongoose = require('mongoose')
require('dotenv').config()
var uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

//const password = process.argv[2]

console.log('connecting to', url, typeof url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


const noteSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3
    },

  number: {
    type: String,
    required: true,
    
    minlength: 8
  }
})

noteSchema.plugin(uniqueValidator)

//const Person = mongoose.model('Person', noteSchema)

// if(process.argv.length===3){
//     console.log("phonebook:")
// Person.find({}).then(result => {
//     result.forEach(person => {
        
//       console.log(person.name, person.number)
//       mongoose.connection.close()
//     }) 
//   })

// }else if(process.argv.length===5){

// const person = new Person({
//   name: process.argv[3],
//   number: process.argv[4],
// })

// person.save().then(response => {
//   console.log(`added ${person.name} number ${person.number} to phonebook`)
//   mongoose.connection.close()
// })
// }

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })


  module.exports = mongoose.model('Person', noteSchema)


  