import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator  } from 'react-navigation';
import { Image } from './NavigationStyles';
import Home from '../Components/Home';
import FilmDetails from '../Components/FilmDetails'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Accueil'
    }
  },
  FilmDetails: {
    screen: FilmDetails,
  }
})

const TabNavigator = createBottomTabNavigator({
  search: {
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/magnifier.png')} />
      }
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../assets/favoriteIconTab.png')} />
      }
    }
  }
},
{
  tabBarOptions: {
    activeBackgroundColor: '#13333f',
    inactiveBackgroundColor: '#081C24',
    showLabel: false,
    showIcon: true,
    style:{
      backgroundColor: '##081C24'
    }
  }
});


export default createAppContainer(TabNavigator)