import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {usePlaceContext} from '../Providers/PlaceContext';

const PlaceScreen = () => {
  const {selectedCity, setSelectedCity} = usePlaceContext();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../assets/Images/back.png')}
            />
            <Text style={{fontSize: 15, letterSpacing: 1}}>
              CHANGE LOCATION
            </Text>
          </TouchableOpacity>
        );
      },
    });
  }, []);

  const places = [
    {
      id: '0',
      place: 'Bangalore',
      image:
        'https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '1',
      place: 'Ahmedabad',
      image:
        'https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      place: 'Chennai',
      image:
        'https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      place: 'Delhi - NCR',
      image:
        'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '4',
      place: 'Hyderabad',
      image:
        'https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '5',
      place: 'Kolkata',
      image:
        'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '6',
      place: 'Jaipur',
      image:
        'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '7',
      place: 'Lucknow',
      image:
        'https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          margin: 10,
          borderRadius: 30,
          // padding: 2,
        }}>
        <TextInput placeholder="Search your city" />
        <Image
          source={require('../../assets/Images/search.png')}
          style={{height: 25, width: 27, position: 'absolute', right: 10}}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Selected City</Text>
        <Text>{selectedCity}</Text>
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={places}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedCity(item.place);
              setTimeout(() => {
                navigation.navigate('HomeScreen');
              }, 800);
            }}
            style={{marginVertical: 10, marginHorizontal: 20}}>
            <ImageBackground
              imageStyle={{borderRadius: 8}}
              style={{width: 160, height: 100, opacity: 0.8}}
              source={{uri: item.image}}>
              {selectedCity === item.place && (
                <View
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    marginTop: 7,
                    justifyContent: 'flex-start',
                  }}>
                  <Image
                    source={require('../../assets/Images/check.png')}
                    style={{
                      height: 25,
                      width: 27,
                    }}
                  />
                </View>
              )}
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  marginBottom: 7,
                  justifyContent: 'flex-end',
                }}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                  {item.place}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({});
