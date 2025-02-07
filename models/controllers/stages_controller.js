//dependencies
const stages = require('express').Router()
const db = require('../')
const { Stage } = db
const { Op } = require('sequelize')

//find all bands
stages.get('/stages', async (req,res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
    })


stages.get('/stages/:id', async (req,res) => {
    try {
        const foundStage = await Stage.findAll({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
    })

//create a stage
stages.post('/stages', async (req,res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: "successfully inerted new stage",
            data: newStage
        })
    } catch (error) {
        res.status(500).json(error)
    }
    })

// UPDATE A stage
stages.put('/stages/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
stages.delete('/stages/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//export
module.exports = stages;