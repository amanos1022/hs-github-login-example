import { Request, Response } from 'express';
import express = require('express');
import createUser from './createUser/createUser';

const app = express();
app.use(express.json())

app.post('/user', async (req: Request, res: Response) => {
  res.json(await createUser(req.body.code));
});

app.listen(3001, () => console.log(`REST API started at 3001`));
