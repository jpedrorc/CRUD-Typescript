import express, { json } from 'express';
import { db } from './database/db';
import {router} from "./routes"

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, async () => {
  await db.sync();
  console.log(`Servidor iniciado na porta ${PORT}`);
});
