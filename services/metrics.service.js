const MetricModel = require('../models/metric.model.js')
const TypesModel = require('../models/types.model.js')
const mqtt = require('mqtt')

module.exports = class MetricService {
    static async #addMetric(topic, value) {
        const type = await TypesModel.findOne({ where: { type: this.#extractMetricName(topic) } })
        const metric = await MetricModel.create({ value: parseFloat(value), type: this.#extractMetricName(topic) })
        metric.setType(type)

        // if(!this.#checkValue(type.minumum, parseFloat(value))) {

        // }
    }
    static #extractMetricName(mqttTopic) {
        return mqttTopic.match(/[^\/]+$/)[0]
    }

    static getTypes() {
        return TypesModel.findAll()
    }

    static #checkValue(allowed, value) {
        return value >= allowed
    }

    static getMetrics(type, time) {
        if (!type && !time) {
            return MetricModel.findAll()
        }
        if (!type) {
            return MetricModel.findAll({
                where: {
                    createdAt: {
                        gte: time,
                    },
                },
            })
        }
        if (!time) {
            return MetricModel.findAll({
                where: { metricType: type },
            })
        }
        return MetricModel.findAll({
            where: {
                createdAt: {
                    gte: time,
                },
                metricType: type,
            },
        })
    }
    static register() {
        if (!this.mqtt) {
            const client = mqtt.connect('mqtt://mqtt0.bast-dev.ru', { username: 'hackathon', password: 'Autumn2021' })
            client.subscribe('service/weather_logger/#', function (err) {
                if (!err) {
                    console.log('MQTT subscribed!')
                }
            })
            client.on('message', this.#addMetric.bind(this))
            this.mqtt = client
        }
    }
}
