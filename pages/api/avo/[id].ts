import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';
import enablePublicAccess from '@cors';

const getAvoById = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const db = new DB();
  const avoId = request.query.id;
  const avo = await db.getById(avoId as string);

  response.status(200).json(avo);
};

export default getAvoById;
