import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {  orange800, orange900, yellow500, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack, orange100} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

import reducers from './reducers';
import App from './components/app';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange800,
    primary2Color: orange900,
    primary3Color: grey400,
    accent1Color: yellow500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: orange100,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: orange800,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
});

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
   <MuiThemeProvider
     muiTheme={muiTheme}
   >
      <App />
  </MuiThemeProvider>
 </Provider>
  , document.getElementById('root')
);
