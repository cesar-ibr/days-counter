import React from 'react';
import { ICounter } from '../../typings/counter';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { reasons } from '../../reasons';

interface IProps {
    counter: ICounter;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        h1: {
            fontSize: '8rem',
            textAlign: 'center',
            color: theme.palette.primary.dark
        }
    }),
);

const toDays = (ms: number) => Math.floor(ms / (1000 * 60 * 60 * 24));

export const Counter = (props: IProps) => {
    const { counter } = props;
    const classes = useStyles();
    const lastDay = Date.parse(counter.lastDate);
    const totalOfDays = toDays(Date.now() - lastDay);

    return (
        <div>
            <Typography variant="h1" className={classes.h1}>{totalOfDays}</Typography>
            <p>Last time Beto was broken was because <i>{reasons[counter.reason]}</i>.</p>
        </div>
    );
};