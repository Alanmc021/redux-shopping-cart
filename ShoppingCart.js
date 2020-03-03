import * as React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BooksScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => <ShoppingCartIcon/>,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'green',
      },
    },
    
  }
);

const AppContainer = createAppContainer(RootStack);

export default class ShoppinCart extends React.Component {
  render() {
    return <AppContainer />;
  }
}