// import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import Navigation from './src/Navigators/StackNavigation';
import PlaceContext from './src/Providers/PlaceContext';

const App = () => {
  // const navigation = useNavigation();
  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerLeft: () => <Text>Hello Mustafa Hakimji</Text>,
    // });
  }, []);
  return (
    <>
      <PlaceContext>
        <Navigation />
      </PlaceContext>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
