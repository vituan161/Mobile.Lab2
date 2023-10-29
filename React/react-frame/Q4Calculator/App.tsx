import {useState} from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style = {{alignSelf:'center',width:240,}}>
      <Text style = {styles.result}>Here</Text>
      <View style={styles.container}>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>1</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>2</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>3</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>+</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>4</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>5</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>6</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>-</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>7</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>8</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>9</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>*</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={{width:110 ,height:50 ,margin:5 ,backgroundColor:'#FF8C00',}}>
          <Text style={styles.inputnumber}>=</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>0</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>/</Text>
        </Pressable>
      </View>
      
      <Pressable style={{alignSelf:'stretch' ,height:50 ,margin:5 ,backgroundColor:'#FF8C00',}}>
          <Text style={styles.inputnumber}>c</Text>
        </Pressable>
    
    </View>
  );
};

export default App;
