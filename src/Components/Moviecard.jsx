import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Moviecard = ({item}) => {
  const navigation = useNavigation();
  const {height, width} = Dimensions.get('window');
  return (
    <View>
      <TouchableOpacity
        style={{
          flex: 1,
          borderRadius: 5,
          marginHorizontal: 17,
          marginVertical: 10,
          justifyContent: 'center',
          height: height / 2.5,
          width: (width - 80) / 2,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: '100%',
            height: '70%',
            resizeMode: 'contain',
            borderRadius: 7,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
          }}
        />
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            marginTop: -30,
            fontSize: 15,
            fontWeight: '800',
            marginBottom: 10,
            textAlign: 'center',
          }}>
          {item.title.substr(0, 20)}
        </Text>
        <Text style={{textAlign: 'center', marginTop: -5, fontWeight: '700'}}>
          U.A. {item.original_language}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Movie', {title: item.title})}
          style={{
            backgroundColor: 'gold',
            padding: 10,
            borderRadius: 6,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginTop: 10,
          }}>
          <Text style={{fontWeight: '500', color: 'black', fontSize: 18}}>
            Book
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Moviecard;

const styles = StyleSheet.create({});
