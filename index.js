const express = require('express')
const fs = require('fs')
const initDB = require('./db.js')
const MetricsService = require('./services/metrics.service.js')
const metricsRouter = require('./routes/metrics.controller.js')
const typesRouter = require('./routes/types.controller.js')

initDB().then(() => MetricsService.register())

const app = express()
const PORT = process.env.PORT || 3003

app.use(express.static('public'))

app.use('/metrics', metricsRouter)
app.use('/types', typesRouter)

app.listen(PORT, () => {
    console.log('server has been started')
})
