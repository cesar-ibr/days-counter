import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface IProps {
    value: string;
    updateReason: (value: string) => void;
    reasons: { [key: string]: string }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(3),
        },
    }),
);

export const ReasonsListComponent = (props: IProps) => {
    const classes = useStyles();
    const { reasons } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = (event.target as HTMLInputElement).value;
        console.log('Radio Button Selected:', selectedValue);
        props.updateReason(selectedValue);
    };

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Reason why Beto is broken</FormLabel>
                <RadioGroup aria-label="reasons" name="reasons" value={props.value} onChange={handleChange}>
                    {Object.keys(reasons).map(key =>
                        <FormControlLabel key={key} value={key} control={<Radio />} label={reasons[key]} />
                    )}
                </RadioGroup>
            </FormControl>
        </div>
    );
}
