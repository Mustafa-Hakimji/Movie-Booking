import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Date from './Date';

const Calendar = ({selectedDate, onSelecteDate}) => {
  const [dates, setDates] = useState([]);
  const getDates = () => {
    const myDates = [];
    for (let i = 0; i <= 5; i++) {
      const dates = moment().add(i, 'days');
      myDates.push(dates);
    }
    setDates(myDates);
  };

  useEffect(() => {
    getDates();
  }, []);
  console.log(dates);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dates.map((date, i) => (
        <Date
          date={date}
          key={i}
          selected={selectedDate}
          onSelecteDate={onSelecteDate}
        />
      ))}
    </ScrollView>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
