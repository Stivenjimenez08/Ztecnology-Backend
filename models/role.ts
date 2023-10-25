import {  DataTypes } from 'sequelize';
import db from '../db/connection';

const Rol = db.define('role',{
    
    nameRol: {
        type: DataTypes.STRING
    },
    rolDescription:{
        type: DataTypes.STRING
    },
    rolStatus:{
        type: DataTypes.BIGINT
    },
})

export default Rol