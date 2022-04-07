import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import Color from './color';
//  import {color } from 'react-native-reanimated';
export default function List() {
  // same as const windowWidth = useWindowDimensions().width;                //const windowHeight = useWindowDimensions().height;
  const {width = 30, height = 70} = useWindowDimensions();
  const isLandscape = width > height; //portrait el 3aks
  // state.
  const [selectedColor, setSelectedColor] = useState('red');
  const [colorTxt, setSelectcolorTxt] = useState('white');
  const [description, setDescription] = useState('');

  return (
    <View>
      <View style={{marginTop: 80}}>
        <Color
          name="Red"
          color="red"
          TextColor="white"
          Press={() => setSelectedColor('red')}
        />
        <Color
          name="Green"
          color="green"
          TextColor="white"
          Press={() => setSelectedColor('green')}
        />
        <Color
          name="Blue"
          color="blue"
          TextColor="white"
          Press={() => setSelectedColor('blue')}
        />
        <Color
          name="Black"
          color="black"
          TextColor="white"
          Press={() => setSelectedColor('black')}
        />
      </View>

      <View
        style={{
          marginTop: 150,
          backgroundColor: selectedColor,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 5,
          shadowOpacity: 0.5,
        }}>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: colorTxt,
            padding: 4,
          }}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Text>
      </View>
    </View>
  );
}
