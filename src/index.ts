import express from 'express';
const PORT = process.env.PORT || 3000;
const app = express();
app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ msg: 'ok' });
});
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
