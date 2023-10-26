import {  DataTypes } from 'sequelize';
import db from '../db/connection';

const customer = db.define('customer',{
    
    names: {
        type: DataTypes.STRING
    },
    nit:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.TINYINT
    }
})

export default customer