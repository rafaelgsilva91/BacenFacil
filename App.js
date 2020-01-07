import React, { PureComponent } from 'react';
import AppContainer from './navigation/AppNavigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faPercent, faCalculator, faGlobe, faInfo, faBars, faCaretRight, faHome } from '@fortawesome/free-solid-svg-icons'

//Ícones usados
library.add(fab, faCheckSquare, faPercent, faCalculator, faGlobe, faInfo, faBars, faCaretRight, faHome );

//configuração do tema 
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
