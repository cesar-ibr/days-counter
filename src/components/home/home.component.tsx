import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Pic } from '../pic/pic.component';
import { Counter } from '../counter/counter.component';
import { ResetCounterContainer } from '../reset-counter/reset-counter-container.component';
import { ICounter } from '../../typings/counter';
import { Footer } from '../footer/footer.component';
import { getCounter, setCounter } from '../../firebase/db';


const defaultState: ICounter = {
    lastDate: '2020-03-02',
    reason: 'dont-know'
}

export const Home = () => {
    const [state, setState] = useState(defaultState);
    useEffect(() => {
        const fetchData = async () => {
            setState(await getCounter());
        };
        fetchData();
    }, []);
    const updateCounter = (counter: ICounter) => {
        setCounter(counter);
        setState(counter);
    };
    return (
        <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item xs={6}>
                <Pic />
            </Grid>
            <Grid item xs={12}>
                <h3>Days Without Breaking Beto:</h3>
            </Grid>
            <Grid item xs={12}>
                <Counter counter={{ ...state }} />
            </Grid>
            <Grid item xs={12}>
                <ResetCounterContainer resetCounter={updateCounter} />
            </Grid>
            <Grid item xs={12} style={{ alignSelf: 'stretch' }}>
                <Footer />
            </Grid>
        </Grid>
    );
};