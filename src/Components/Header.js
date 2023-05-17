import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{marginBottom: 55}}>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/original/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
        }}
        style={{height: 200, resizeMode: 'contain'}}>
        <TouchableOpacity
          style={{
            height: 90,
            backgroundColor: 'white',
            padding: 5,
            width: '90%',
            borderRadius: 5,
            top: 160,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <View>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Releasing in 1 day
              </Text>
              <Text
                style={{
                  marginVertical: 5,
                  fontWeight: '900',
                  fontSize: 16,
                  color: 'black',
                }}>
                CUSTUDY
              </Text>
              <Text style={{fontSize: 15, color: 'grey', fontWeight: '500'}}>
                U.A. TELEGU
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'gold',
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
              }}>
              <Text style={{fontWeight: '500', color: 'black', fontSize: 18}}>
                Book
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
