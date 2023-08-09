import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/ping', (req, res, next) => {
  return res.status(200).json({ message: 'pong' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
