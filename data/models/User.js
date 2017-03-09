import Sequelize from 'sequelize'
import db from '../sequelize'
var User = db.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
    },
    sex: {
        type: Sequelize.BOOLEAN
    }
})
export default User;