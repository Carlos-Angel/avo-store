import { IncomingMessage, ServerResponse } from 'http';
import DB from '@database';

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ data: allEntries }));
};

export default allAvos;
