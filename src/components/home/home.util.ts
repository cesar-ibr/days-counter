import { getCounter } from '../../firebase/db';

export const getCounterFromDB = async () => {
    return await getCounter();
};