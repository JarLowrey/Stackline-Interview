import React, { Component } from 'react';

import Home from './routes/Home';

import store from "./store/store";
import { LOAD_DATA } from "./store/actionTypes";
import { Provider } from "react-redux";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#686767' },
    secondary: { main: '#b5b5b5' },
  },
});


class App extends Component {
  constructor(props) {
    super(props);
    this.lazyLoadRetailData();
  }

  async lazyLoadRetailData () {
    store.dispatch({ //lasy load json data with redux
      type: LOAD_DATA,
      retailSaleData: await import('./assets/data/Webdev_data2.json')
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Home />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
