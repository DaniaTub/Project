import React, {useState, setState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Color = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.Press}
        style={{
          backgroundColor: props.color,
          alignSelf: 'center',
          width: '80%',
          height: 40,
          borderRadius: 5,
          marginTop: 10,
          shadowOpacity: 0.5,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 16,
            color: props.TextColor,
          }}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Color;
