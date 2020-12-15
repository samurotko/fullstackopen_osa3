const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.json()) 
app.use(cors())
app.use(express.static('build'))

morgan.token('data', function(req, res){
    return JSON.stringify(req.body)
})
    




app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))



  let persons = [
    { 
      name: "Arto Hellas", 
      number: "040-123456",
      id: 1
    },
    { 
      name: "Ada Lovelace", 
      number: "39-44-5323523",
      id: 2
    },
    { 
      name: "Dan Abramov", 
      number: "12-43-234345",
      id: 3
    },
    { 
      name: "Mary Poppendieck", 
      number: "39-23-6423122",
      id: 4
    }
  ]


  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(per => per.id === id)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    
  })

  app.get('/info', (req, res) => {
    const str = `Phonebook has info for ${persons.length} persons ${new Date}`
    res.json(str)
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ 
          error: 'data missing' 
        })
    }
    console.log(persons.find(data => data.name === body.name))
    if (persons.find(data => data.name === body.name)) {
        console.log("found")
        return response.status(400).json({ 
          error: 'name must be unique' 
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 100),
    }
    
    console.log("person",person,typeof Math.floor(Math.random() * 100))
    persons=persons.concat(person)
    console.log(persons)
    response.json(person)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
  
    response.status(204).end()
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })