import {Sequelize} from "sequelize";

const databaseName = process.env.DATABASE_NAME!;
const databaseUser = process.env.DATABASE_USER!;
const databasePass = process.env.DATABASE_PASS!;
const databaseHost = process.env.DATABASE_HOST!;
const databasePort = process.env.DATABASE_PORT!;

export const db = new Sequelize(
    databaseName,
    databaseUser,
    databasePass,{
        dialect:"mysql",
        host: databaseHost,
        port: +databasePort,
    }
);

