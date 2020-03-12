import React from 'react';
import { Container } from '@material-ui/core';
import { reasons } from '../../reasons';
import { ReasonsListComponent } from './reasons-list.component';
import { ResetButton } from './reset-button.component';
import { ICounter } from '../../typings/counter';
import { ReasonsKeys } from '../../typings/reason';

interface IProps {
    resetCounter: (counter: ICounter) => void;
}

const getTodayString = () => {
    const d = new Date();
    d.setUTCHours(0, 0, 0, 0);
    return d.toISOString();
};

export const ResetCounterContainer = (props: IProps) => {
    const [value, setReason] = React.useState<ReasonsKeys>('dont-know');
    const submit = () => {
        const newState = {
            lastDate: getTodayString(),
            reason: value
        };
        console.log('--- New State', newState);
        props.resetCounter(newState)
    };


    return (
        <Container>
            <h3>Reset The Counter In Case Beto Is Broken</h3>
            <ReasonsListComponent
                reasons={reasons}
                value={value}
                updateReason={(reason: ReasonsKeys) => setReason(reason)}
            />
            <ResetButton clickHandler={submit} />
        </Container>
    );
};