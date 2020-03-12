import { db } from './firebase';
import { ICounter } from '../typings/counter';

const DAYS_TRACKER_REF = 'days_tracker';
export async function getCounter(): Promise<ICounter> {
    const counter = await db.ref(DAYS_TRACKER_REF).once('value');
    return counter.val();
}

export async function setCounter(counter: ICounter) {
    await db.ref(DAYS_TRACKER_REF).set(counter);
}