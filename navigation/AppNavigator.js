import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../app/HomeScreen';
import DadosBacen from '../app/DadosBacen';
import TaxasDeJuros from '../app/TaxasDeJuros';
import CalculadoraRevisional from '../app/CalculadoraRevisional';
import LinksUteis from '../app/LinksUteis';
import Sobre from '../app/Sobre';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      HomeScreen: {
        screen: HomeScreen,
        path: '/',
        navigationOptions: {
            title: 'BC CALC',
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
      CalculadoraRevisional: {
        screen: CalculadoraRevisional,
        path: '/',
        navigationOptions: {
            title: 'CALCULADORA REVISIONAL',
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
          backgroundColor: '#000080',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          //fontWeight: 'bold',
        },
      },
    }
  )
);

export default AppContainer;