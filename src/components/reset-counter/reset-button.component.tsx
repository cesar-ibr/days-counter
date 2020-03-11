import React from 'react';
import { Button } from '@material-ui/core';

interface IProps {
    clickHandler: Function;
}

export const ResetButton = (props: IProps) =>
    <Button
        onClick={() => props.clickHandler()}
        variant="contained"
        color="primary">
        Reset Counter
    </Button>;