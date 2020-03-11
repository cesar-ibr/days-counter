import React from 'react';
import { Container } from '@material-ui/core';
import { reasons } from './reasons';
import { ReasonsListComponent } from './reasons-list.component';
import { ResetButton } from './reset-button.component';

export const ResetCounterContainer = () => {
    const [value, setReason] = React.useState('dont-know');
    const submit = () => {
        console.log('Selected option: ', value);
    };


    return (
        <Container>
            <h3>In Case Beto is Broken:</h3>
            <ReasonsListComponent 
                reasons={reasons}
                value={value}
                updateReason={(reason) => setReason(reason)}
                />
            <ResetButton clickHandler={submit} />
        </Container>
    );
};