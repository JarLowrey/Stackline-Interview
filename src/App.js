import React, { Component } from 'react';

import Home from './routes/Home';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#686767' }, 
    secondary: { main: '#b5b5b5' },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
