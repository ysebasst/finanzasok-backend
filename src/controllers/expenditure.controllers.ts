import { Request, Response } from 'express';

export const getExpenditures = (request: Request, response: Response) => {
  response.send('getExpenditures');
};

export const createExpenditure = (request: Request, response: Response) => {
  response.send('createExpenditure');
};

export const getExpenditure = (request: Request, response: Response) => {
  response.send('getExpenditure');
};

export const updateExpenditure = (request: Request, response: Response) => {
  response.send('updateExpenditure');
};

export const deleteExpenditure = (request: Request, response: Response) => {
  response.send('deleteExpenditure');
};
