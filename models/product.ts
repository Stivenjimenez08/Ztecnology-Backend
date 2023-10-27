import { DataTypes } from "sequelize";
import db from '../db/connection';

const product= db.define ('product', {

    name: {
        type: DataTypes.STRING
    },
    detail: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.BIGINT
    },
    price: {
        type: DataTypes.BIGINT
    },
    state: {
        type: DataTypes.TINYINT
    }
})

export default product