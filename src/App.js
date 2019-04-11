import React, { Component } from 'react';

import Home from './routes/Home';

import store from "./store/store";
import { LOAD_CHART_DATA } from "./store/actionTypes";
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

  async lazyLoadRetailData() {
    const retailData = await import('./assets/data/Webdev_data2.json');

    store.dispatch({
      type: LOAD_CHART_DATA,
      retailSaleData: retailData,
      index: 0,
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
