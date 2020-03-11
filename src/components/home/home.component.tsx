import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Pic } from '../pic/pic.component';
import { Counter } from '../counter/counter.component';
import { ResetCounterContainer } from '../reset-counter/reset-counter-container.component';

export const Home = () =>
    <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={6}>
            <Pic />
        </Grid>
        <Grid item xs={12}>
            <h3>Days Without Breaking Beto:</h3>
        </Grid>
        <Grid item xs={12}>
            <Counter />
        </Grid>
        <Grid item xs={12}>
            <ResetCounterContainer />
        </Grid>
    </Grid>;