import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import img from '../../../assets/images/betillo.jpeg';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        large: {
            marginTop: theme.spacing(5),
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
    }),
);


export const Pic = () => {
    const classes = useStyles();
    return <Avatar alt="El Betillo" src={img} className={classes.large} />;
};