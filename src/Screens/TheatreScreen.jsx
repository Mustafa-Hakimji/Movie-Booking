import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const TheatreScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {name, selectedDate, mall, showtimes} = route.params;
  const [selecteSeats, setSelectedseats] = useState([]);
  const handleSeatPress = (row, seat) => {
    const isSelected = selecteSeats.some(
      selecteSeat => selecteSeat.row === row && selecteSeat.seat === seat,
    );
    if (isSelected) {
      setSelectedseats(previ =>
        previ.filter(item => item.seat !== seat || item.row !== row),
      );
    } else {
      setSelectedseats(prev => [...prev, {row, seat}]);
    }
  };

  const [rows, setRows] = useState([
    {
      row: 'A',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'B',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'C',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'D',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
    {
      row: 'E',
      seats: [
        {seat: '1', bookingStatus: 'false'},
        {seat: '2', bookingStatus: 'false'},
        {seat: '3', bookingStatus: 'false'},
        {seat: '4', bookingStatus: 'false'},
        {seat: '5', bookingStatus: 'false'},
        {seat: '6', bookingStatus: 'false'},
        {seat: '7', bookingStatus: 'false'},
      ],
    },
  ]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => {
        return (
          <>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../assets/Images/back.png')}
              />
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 15,
                  color: 'black',
                  textAlignVertical: 'center',
                }}>
                {mall}
              </Text>
            </TouchableOpacity>
          </>
        );
      },
    });
  }, []);

  const renderSeats = () => {
    return rows.map((item, index) => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
          key={index}>
          <View style={{width: 30, marginRight: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 15}}>
              {item.row}
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {item.seats.map((seat, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleSeatPress(item.row, seat.seat)}
                    style={[
                      styles.seat,
                      selecteSeats.some(
                        selecteSeat =>
                          selecteSeat.row === item.row &&
                          selecteSeat.seat === seat.seat,
                      ) && {
                        backgroundColor: 'gold',
                        borderColor: 'transparent',
                      },
                      seat.bookingStatus === 'disabled' && {
                        backgroundColor: 'gray',
                        borderColor: 'transparent',
                      },
                    ]}
                    disabled={seat.bookingStatus === 'disabled'}>
                    <Text>{seat.seat}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      );
    });
  };

  const pay = () => {
    const updatedRows = [...rows];
    selecteSeats.forEach(seat => {
      const rowIndex = updatedRows.findIndex(row => row.row === seat.row);
      const seatIndex = updatedRows[rowIndex].seats.findIndex(
        s => s.seat === seat.seat,
      );
      updatedRows[rowIndex].seats[seatIndex].bookingStatus = 'disabled';
    });
    setRows(updatedRows);
    setSelectedseats([]);
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          alignSelf: 'center',
          borderWidth: 1,
          width: '70%',
          padding: 5,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          marginTop: 10,
          backgroundColor: 'grey',
        }}></View>
      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          color: 'black',
          fontSize: 16,
        }}>
        SCREEN THIS WAY
      </Text>
      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          color: 'grey',
          fontSize: 16,
          marginBottom: 20,
        }}>
        CLASSIC (240)
      </Text>
      {renderSeats()}
      <View
        style={{
          backgroundColor: 'lightgrey',
          padding: 10,
          marginTop: 25,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={{backgroundColor: 'gold', height: 20, width: 20}} />
          <Text
            style={{
              fontWeight: '400',
              color: 'black',
              fontSize: 15,
              marginTop: 5,
            }}>
            selected
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{backgroundColor: 'white', height: 20, width: 20}} />
          <Text
            style={{
              fontWeight: '400',
              color: 'black',
              fontSize: 15,
              marginTop: 5,
            }}>
            vacant
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{backgroundColor: 'gray', height: 20, width: 20}} />
          <Text
            style={{
              fontWeight: '400',
              color: 'black',
              fontSize: 15,
              marginTop: 5,
            }}>
            occupied
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => pay()}
        style={{
          marginTop: 30,
          backgroundColor: 'steelblue',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: '700', fontSize: 17, color: 'white'}}>
          hello
        </Text>
        <Text style={{fontWeight: '700', fontSize: 17, color: 'white'}}>
          Pay {240 * selecteSeats.length}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({
  seat: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#c0c0c0',
  },
});
