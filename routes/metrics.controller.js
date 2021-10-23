const express = require('express')
const MetricsService = require('../services/metrics.service.js')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const { date } = req.query
        const metrics = await MetricsService.getMetrics(null, date)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(metrics))
    } catch (e) {
        next(e)
    }
})

router.get('/:type', async (req, res, next) => {
    try {
        const { type } = req.params
        const { date } = req.query
        const metrics = await MetricsService.getMetrics(type, date)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(metrics))
    } catch (e) {
        next(e)
    }
})

module.exports = router
