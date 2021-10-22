import { DataTypes } from "sequelize";
import {db} from "../db";

export const AddressModel = db.define('address',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    address:{
        type: DataTypes.STRING,
        allowNull:false
    },
    number:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    cep:{
        type: DataTypes.STRING,
        allowNull:false
    },
    state:{
        type: DataTypes.STRING,
        allowNull:false
    },
    country:{
        type: DataTypes.STRING,
        allowNull:false
    },
})

