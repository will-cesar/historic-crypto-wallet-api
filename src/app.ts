import express from "express"; 
import { Request, Response } from 'express';

export const app = express();

app.use('/', (req: Request, res: Response) => {
  res.send('Historic crypto wallet API');
});