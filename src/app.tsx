import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';
import { CssBaseline } from '@material-ui/core';
import { Home } from './components/home/home.component';

export const App = () =>
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Home />
    </ThemeProvider>;
