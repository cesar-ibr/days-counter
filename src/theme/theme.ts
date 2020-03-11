import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, purple } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: purple
    },
    typography: {
        body1: {
            fontFamily: 'Roboto'
        }
    }
});