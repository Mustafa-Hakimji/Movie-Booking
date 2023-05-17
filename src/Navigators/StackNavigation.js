import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Components/ProfileScreen';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import PlaceScreen from '../Screens/PlaceScreen';
import MovieScreen from '../Screens/MovieScreen';
import TheatreScreen from '../Screens/TheatreScreen';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreens() {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator

    // screenOptions={{headerShown: false}}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: 'welcome Mustafa',
          headerRight: () => {
            return (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{marginRight: 15}}>
                  <Image
                    source={require('../../assets/Images/bell.png')}
                    style={{height: 25, width: 27}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginRight: 15}}
                  onPress={() => navigation.navigate('Places')}>
                  <Image
                    source={require('../../assets/Images/gps.png')}
                    style={{height: 25, width: 27}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Places')}>
                  <Text>Name city</Text>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <HomeStack.Screen name="Places" component={PlaceScreen} />
      <HomeStack.Screen
        name="Movie"
        component={MovieScreen}
        options={{headerShown: true}}
      />
      <HomeStack.Screen name="Theatre" component={TheatreScreen} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreens}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {color: 'black'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/Images/home1.png')}
                  style={{height: 25, width: 27}}
                />
              ) : (
                <Image
                  source={require('../../assets/Images/home2.png')}
                  style={{height: 25, width: 27}}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreens}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {color: 'black'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/Images/user1.png')}
                  style={{height: 25, width: 27}}
                />
              ) : (
                <Image
                  source={require('../../assets/Images/user2.png')}
                  style={{height: 25, width: 27}}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
