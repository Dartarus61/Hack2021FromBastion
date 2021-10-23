const { Sequelize } = require('sequelize')
const MetricModel = require('./models/metric.model.js')
const TypesModel = require('./models/types.model.js')
require('dotenv').config()

module.exports = async function init() {
    if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_USER_PASSWORD) {
        console.error('Error: please configure "DB_NAME", "DB_USER" and "DB_USER_PASSWORD" env variables')
        process.exit(1)
    }

    const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_USER_PASSWORD, {
        host: process.env.DB_HOST || 'localhost',
        port: '5432',
        dialect: 'postgres',
        logging: false,
    })

    ;(async function testConnection() {
        try {
            await connection.authenticate()
            console.log('DB connection has been established successfully.')
        } catch (error) {
            console.error('Unable to connect to the database:', error)
        }
    })()

    const models = [MetricModel, TypesModel]

    for (const model of models) {
        model.register(connection)
    }

    TypesModel.hasMany(MetricModel, { sourceKey: 'type', foreignKey: 'metricType' })
    MetricModel.belongsTo(TypesModel, { targetKey: 'type', foreignKey: 'metricType' })

    await connection.sync({ force: true })

    await TypesModel.bulkCreate([
        {
            type: 'outdoor_humidity',
            normalName: 'Влажность',
            minimum: 60,
        },
        {
            type: 'outdoor_light',
            normalName: 'Освещенность',
            minimum: 445,
        },
        {
            type: 'outdoor_temperature',
            normalName: 'Температура',
            minimum: 16,
        },
        {
            type: 'soil_humidity',
            normalName: 'Влажность почвы',
            minimum: 60,
        },
        {
            type: 'soil_temperature',
            normalName: 'Температура почвы',
            minimum: 9,
        },
    ])
}
