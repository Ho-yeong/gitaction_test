import express from 'express';
import { functionSum } from './sum';

const app = express();
const port = 3000;

console.log('main');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/ping', (req, res, next) => {
  res.status(200).json({ message: 'pong' });
});

app.use('/sum/:num1/:num2', (req, res, next) => {
  try {
    const { num1, num2 } = req.params;

    const result = functionSum(num1, num2);
    res.status(200).json({ result });
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
