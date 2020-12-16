const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
`mongodb+srv://BDuser:${password}@cluster0.ls8am.mongodb.net/phonebook?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const Person = mongoose.model('Person', noteSchema)

if(process.argv.length===3){
    console.log("phonebook:")
Person.find({}).then(result => {
    result.forEach(person => {
        
      console.log(person.name, person.number)
      mongoose.connection.close()
    }) 
  })

}else if(process.argv.length===5){

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
})

person.save().then(response => {
  console.log(`added ${person.name} number ${person.number} to phonebook`)
  mongoose.connection.close()
})
}


  