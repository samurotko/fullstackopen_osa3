const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json()) 
app.use(cors())
app.use(express.static('build'))
const Person =require('./models/db')

morgan.token('data', function(req, res){
    return JSON.stringify(req.body)
})
    




app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))



  // let persons = [
  //   { 
  //     name: "Arto Hellas", 
  //     number: "040-123456",
  //     id: 1
  //   },
  //   { 
  //     name: "Ada Lovelace", 
  //     number: "39-44-5323523",
  //     id: 2
  //   },
  //   { 
  //     name: "Dan Abramov", 
  //     number: "12-43-234345",
  //     id: 3
  //   },
  //   { 
  //     name: "Mary Poppendieck", 
  //     number: "39-23-6423122",
  //     id: 4
  //   }
  // ]


  app.get('/', (req, res) => {
    console.log("/")
    res.send('<h1>fuckkkk!</h1>')
  })
  
  app.get('/api/persons', (req, res,next) => {
    Person.find({}).then(persons => {
      res.json(persons)
      
    })
    .catch(error => next(error))
    console.log("api/persons")
    //res.json(persons)
  })

  app.get('/api/persons/:id', (request, response, next) => {

    Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).catch(error => next(error))
      }
    })
    .catch(error => {
      console.log(error)
      next(error)
    })

    
  })

  app.get('/info', (req, res) => {

    
    Person.find({})
    .then(persons => {
      console.log(persons.length)
      const str = `Phonebook has info for ${persons.length} persons ${new Date}`
      res.json(str)
    }).catch(error => next(error))

    
  })

  app.post('/api/persons', (request, response,next) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).send({ 
          error: 'data missing' 
        })
    }
    // console.log("person data is",Person.find(data => data.name === body.name))
    // if (Person.find(data => data.name === body.name)) {
    //     console.log("found")
    //     return response.status(400).json({ 
    //       error: 'name must be unique' 
    //     })
    // }

    const person = new Person ({
        name: body.name,
        number: body.number,
        //id: Math.floor(Math.random() * 100),
    })
    
    console.log("person",person,typeof Math.floor(Math.random() * 100))
    person.save()
    .then(saved => {
      response.json(saved)
    }).catch(error=>{

      next(error)
    })
  })

  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const person = {
      name: body.name,
      number: body.number,
    }
  
    Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
  })

  app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
    
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }

    next(error)
  }

  app.use(errorHandler)