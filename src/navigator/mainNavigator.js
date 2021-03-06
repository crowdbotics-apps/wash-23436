import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile186397Navigator from '../features/UserProfile186397/navigator';
import Tutorial186396Navigator from '../features/Tutorial186396/navigator';
import NotificationList186368Navigator from '../features/NotificationList186368/navigator';
import Settings186367Navigator from '../features/Settings186367/navigator';
import Settings186359Navigator from '../features/Settings186359/navigator';
import UserProfile186357Navigator from '../features/UserProfile186357/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile186397: { screen: UserProfile186397Navigator },
Tutorial186396: { screen: Tutorial186396Navigator },
NotificationList186368: { screen: NotificationList186368Navigator },
Settings186367: { screen: Settings186367Navigator },
Settings186359: { screen: Settings186359Navigator },
UserProfile186357: { screen: UserProfile186357Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
