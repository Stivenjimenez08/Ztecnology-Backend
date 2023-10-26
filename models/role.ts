import {  DataTypes } from 'sequelize';
import db from '../db/connection';

const Rol = db.define('role',{
    
    name: {
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.BIGINT
    },
})

export default Rol