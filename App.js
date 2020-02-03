import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './Components/HomePage/HomePage';
import ZikirPagi from './Components/Zikir/zikirPagi';
import ZikirSore from './Components/Zikir/zikirSore';
import ZikirSholat from './Components/Zikir/zikirSholat';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
  ZikirPagiPage: {
    screen: ZikirPagi,
    navigationOptions: {
      header: null,
    },
  },
  ZikirSorePage: {
    screen: ZikirSore,
    navigationOptions: {
      header: null,
    },
  },
  ZikirSholatPage: {
    screen: ZikirSholat,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
// ./gradlew assembleRelease -x bundleReleaseJsAndAssets
