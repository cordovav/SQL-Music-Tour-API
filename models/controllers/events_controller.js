//dependencies
const events = require('express').Router()
const db = require('../')
const { Events } = db
const { Op } = require('sequelize')


//find all events
events.get('/events', async (req,res) => {
    try {
        const foundEvents = await Events.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
    })


events.get('/events/:id', async (req,res) => {
    try {
        const foundEvents = await Events.findAll({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
    })

//create a band
events.post('/events', async (req,res) => {
    try {
        const newEvent = await Events.create(req.body)
        res.status(200).json({
            message: "successfully inerted new event",
            data: newEvent
        })
    } catch (error) {
        res.status(500).json(error)
    }
    })

// UPDATE A BAND
events.put('/events/:id', async (req, res) => {
    try {
        const updatedEvents = await Events.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
events.delete('/events/:id', async (req, res) => {
    try {
        const deletedEvents = await Events.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//export
module.exports = events;