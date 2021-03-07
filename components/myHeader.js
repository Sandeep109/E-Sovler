import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AppHeader extends React.Component{
  render(){
    return(
      <View>
    <ImageBackground source={require("../assets/bg4.jpg")} >
          <Text style={styles.text}>{this.props.title}</Text></ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#0f2a33',
  },
  text:{
    color: '#2ec4d9',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

