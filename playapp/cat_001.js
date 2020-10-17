import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// Functions
const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

// Main body
const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
        />
        <Cat name='Maru' />
        <Cat name='Jellylorum' />
        <Cat name='Spot' />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

// Components
const Cat = (props) => {
  return (
    <Text>Hello, I am {props.name}!</Text>
    // <Text> Hello, I am {getFullName("Rum", "Tum", "Tugger")}!</Text>
  );
}

export default App;