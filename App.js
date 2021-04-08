import * as Speech from 'expo-speech';
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }

  speak = ()=>{
      var thingsToSay = this.state.text;
      Speech.speak(thingsToSay)
  }

  render(){
    return (
      <View style={styles.container}>

        <Header
          backgroundColor={'#07B4BA'}
            centerComponent={{
            text: 'Text To Speech App',
              style: { color: '#fff', fontSize: 20 },
            }}
          />

          <View  style={styles.buttonText}>
            <Text style={{fontSize: 25,color: 'white'}}>Enter the speech</Text>
          </View>

          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.buttonText}
            onPress={ ()=>{ 
              this.state.text ===''? Alert.alert('Please write a word to hear its sound!!!') : this.speak()
                
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Click here to hear the speech</Text>
          </TouchableOpacity>

        </View>
        
        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  buttonText: {
    backgroundColor: '#07B4BA',
    marginTop: 50,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 75,
    borderRadius: 15,
    fontSize: 20,
  },
});
