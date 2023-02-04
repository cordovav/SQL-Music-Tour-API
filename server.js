// DEPENDENCIES
const express = require('express')
const app = express()


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//controllers
const bandsController = require('./models/controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController = require('./models/controllers/events_controller')
app.use('/events', eventsController)

const stagesController = require('./models/controllers/stages_controller')
app.use('/stages', stagesController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})