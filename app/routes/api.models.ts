import { json } from '@vercel/remix';
import { MODEL_LIST } from '~/utils/constants';

export async function loader() {
  return json(MODEL_LIST);
}
