const { Model, DataTypes } = require('sequelize')

module.exports = class MetricModel extends Model {
    static register(connection) {
        this.init(
            {
                value: DataTypes.FLOAT,
            },
            { sequelize: connection, modelName: 'metric', timestamps: true, updatedAt: false }
        )
    }
}
