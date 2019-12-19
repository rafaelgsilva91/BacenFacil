import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../app/HomeScreen';
import DadosBacen from '../app/DadosBacen';
import TaxasDeJuros from '../app/TaxasDeJuros';
import LinksUteis from '../app/LinksUteis';
import Sobre from '../app/Sobre';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      HomeScreen: {
        screen: HomeScreen,
        path: '/',
        navigationOptions: {
            title: 'BACEN FÁCIL',
        },
      },
      DadosBacen: {
        screen: DadosBacen,
        path: '/DadosBacen',
        navigationOptions: {
            title: 'RESULTADOS',
        },
      },
      TaxasDeJuros: {
        screen: TaxasDeJuros,
        path: '/',
        navigationOptions: {
            title: 'TAXAS DE JUROS',
        },
      },
      LinksUteis: {
        screen: LinksUteis,
        path: '/',
        navigationOptions: {
            title: 'LINKS ÚTEIS',
        },
      },
      Sobre: {
        screen: Sobre,
        path: '/',
        navigationOptions: {
            title: 'Sobre o APP',
        },
      },
    },    
    {
      initialRouteName: 'HomeScreen',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  )
);

export default AppContainer;