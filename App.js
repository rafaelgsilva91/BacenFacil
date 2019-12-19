import React, { PureComponent } from 'react';
import AppContainer from './navigation/AppNavigator';


export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return <AppContainer />
    }
}
