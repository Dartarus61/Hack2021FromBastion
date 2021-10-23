const express = require('express')
const MetricsService = require('../services/metrics.service.js')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const types = await MetricsService.getTypes()
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(types))
    } catch (e) {
        next(e)
    }
})

module.exports = router
