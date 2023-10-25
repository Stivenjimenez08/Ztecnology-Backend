import {  DataTypes } from 'sequelize';
import db from '../db/connection';
import Rol from './role'

const user = db.define('user',{
    
    userName: {
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    userPassword:{
        type: DataTypes.STRING
    },
    photo:{
        type: DataTypes.STRING
    },
    idRol:{
        type: DataTypes.BIGINT
    },
    userStatus:{
        type: DataTypes.TINYINT
    }
})

user.belongsTo( Rol, {
    foreignKey: 'idRol'
})

export default user