import { DataTypes } from 'sequelize';
import db from '../db/connection'
import User from './user'
import Customer from './customer'
import Product from './product'

const Quote = db.define('quote', {

    date: {
        type: DataTypes.DATE
    },
    idCustomer: {
        type: DataTypes.BIGINT
    },
    serial: {
        type: DataTypes.INTEGER
    },
    idProduct: {
        type: DataTypes.BIGINT
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    discount: {
        type: DataTypes.INTEGER
    },
    idUser: {
        type: DataTypes.BIGINT
    },
    subTotal: {
        type: DataTypes.INTEGER
    },
    total: {
        type: DataTypes.INTEGER
    },
    state: {
        type: DataTypes.BIGINT
    }
})

Quote.belongsTo( Customer, {
    foreignKey: 'idCustomer'
})
Quote.belongsTo( Product, {
    foreignKey: 'idProduct'
})
Quote.belongsTo( User, {
    foreignKey: 'idUser'
})

export default Quote