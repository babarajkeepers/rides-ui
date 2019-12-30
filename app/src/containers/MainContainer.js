import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import {ThemeProvider} from '@material-ui/core/styles';
import HomeContainer from "HomeContainer"


const theme = createMuiTheme({
    palette: {
        primary: {main: '#2980b9'},
        secondary: {main: '#df3320'},
        error: red,
        contrastThreshold: 3,
        contrastText: '#ffcc00',
        tonalOffset: 0.2,
    }

});

const MainContainer = () => (
    <ThemeProvider theme={theme}>
        <HomeContainer/>
    </ThemeProvider>
);

export default MainContainer