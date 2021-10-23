const { Model, DataTypes } = require('sequelize')

module.exports = class TypesModel extends Model {
    static register(connection) {
        this.init(
            {
                type: {
                    type: DataTypes.STRING,
                    unique: true,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                normalName: DataTypes.STRING,
                minimum: DataTypes.FLOAT,
            },
            { sequelize: connection, modelName: 'type', timestamps: false }
        )
    }
}
