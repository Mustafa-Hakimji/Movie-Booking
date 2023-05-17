import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import moment from 'moment';

const Date = ({date, selected, onSelecteDate}) => {
  const day = moment(date).format('ddd');
  const dayNo = moment(date).format('D');
  const fulldate = moment(date).format('YYYY-MM-DD');
  return (
    <TouchableOpacity
      onPress={() => onSelecteDate(fulldate)}
      style={[
        styles.container,
        selected === fulldate && {backgroundColor: 'gold'},
      ]}>
      <Text style={[styles.day, selected && {color: 'black'}]}>{day}</Text>
      <View style={{height: 10}} />
      <Text style={[styles.number, selected && {color: 'black'}]}>{dayNo}</Text>
    </TouchableOpacity>
  );
};

export default Date;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    borderColor: 'black',
    padding: 10,
    width: 70,
    height: 70,
    marginHorizontal: 6,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {color: 'white', fontWeight: '600', fontSize: 15},
  number: {color: 'white', fontWeight: '600', fontSize: 15},
});
