import {  DataTypes } from 'sequelize';
import db from '../db/connection';
import Rol from './role'

const user = db.define('user',{
    
    names: {
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    photo:{
        type: DataTypes.STRING
    },
    idRol:{
        type: DataTypes.BIGINT
    },
    state:{
        type: DataTypes.TINYINT
    }
})

user.belongsTo( Rol, {
    foreignKey: 'idRol'
})

export default user