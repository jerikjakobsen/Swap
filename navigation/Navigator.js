import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'


const Navigator = createStackNavigator({
    Screen1: Screen1,
    Screen2: Screen2 
})

export default createAppContainer(Navigator)