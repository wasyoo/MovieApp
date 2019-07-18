import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Home from '../Components/Home';
import FilmDetails from '../Components/FilmDetails'

const Navigator = createStackNavigator({
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

export default createAppContainer(Navigator)