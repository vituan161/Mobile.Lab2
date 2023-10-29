import {useState} from 'react';
import {
  Button,
  GestureResponderEvent,
  Pressable,
  Text,
  TextBase,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs
  const handleNumberInput = (num: number) => {
    return (event: GestureResponderEvent) => {
      if (displayValue === '0') {
        setDisplayValue(num.toString());
      } else {
        setDisplayValue(displayValue + num);
      }
    };
  };

  // Function to handle operator inputs
  const HandleOperatorInput = (operator: string) => {
    return (event: GestureResponderEvent) => {
      setOperator(operator);
      setFirstValue(displayValue);
      setDisplayValue('0');
    };
  };

  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={{flex:1 ,justifyContent:'center' ,alignSelf: 'center', width: 240}}>
      <TextInput
        textAlign="right"
        style={styles.result}
        editable={false}
        value={displayValue}></TextInput>
      <View style={styles.container}>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(1)}>
          <Text style={styles.inputnumber}>1</Text>
        </Pressable>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(2)}>
          <Text style={styles.inputnumber}>2</Text>
        </Pressable>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(3)}>
          <Text style={styles.inputnumber}>3</Text>
        </Pressable>
        <Pressable
          style={styles.inputbutton}
          onPress={HandleOperatorInput('+')}>
          <Text style={styles.inputnumber}>+</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(4)}>
          <Text style={styles.inputnumber}>4</Text>
        </Pressable>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(5)}>
          <Text style={styles.inputnumber}>5</Text>
        </Pressable>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(6)}>
          <Text style={styles.inputnumber}>6</Text>
        </Pressable>
        <Pressable
          style={styles.inputbutton}
          onPress={HandleOperatorInput('-')}>
          <Text style={styles.inputnumber}>-</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(7)}>
          <Text style={styles.inputnumber}>7</Text>
        </Pressable>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(8)}>
          <Text style={styles.inputnumber}>8</Text>
        </Pressable>
        <Pressable style={styles.inputbutton} onPress={handleNumberInput(9)}>
          <Text style={styles.inputnumber}>9</Text>
        </Pressable>
        <Pressable
          style={styles.inputbutton}
          onPress={HandleOperatorInput('*')}>
          <Text style={styles.inputnumber}>*</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          style={{
            width: 110,
            height: 50,
            margin: 5,
            backgroundColor: '#FF8C00',
          }}
          onPress={handleEqual}>
          <Text style={styles.inputnumber}>=</Text>
        </Pressable>
        <Pressable style={styles.inputbutton}>
          <Text style={styles.inputnumber}>0</Text>
        </Pressable>
        <Pressable
          style={styles.inputbutton}
          onPress={HandleOperatorInput('/')}>
          <Text style={styles.inputnumber}>/</Text>
        </Pressable>
      </View>

      <Pressable
        style={{
          alignSelf: 'stretch',
          height: 50,
          margin: 5,
          backgroundColor: '#FF8C00',
        }}
        onPress={handleClear}>
        <Text style={styles.inputnumber}>c</Text>
      </Pressable>
    </View>
  );
};
export default App;
