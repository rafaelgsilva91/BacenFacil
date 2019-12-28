import React, { PureComponent } from 'react';
import AppContainer from './navigation/AppNavigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return <PaperProvider theme={theme}><AppContainer /></PaperProvider>
    }
}
